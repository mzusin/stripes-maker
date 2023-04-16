import { IStripe } from '../interfaces';
import { newId } from 'mz-math';

export const updateStripe = (id: string, updatedStripe: IStripe, stripes: IStripe[]) : IStripe[] => {
    const index = stripes.findIndex(stripe => stripe.id === id);
    if(index === -1) return stripes;

    const copy = [...stripes];
    copy[index] = updatedStripe;

    return copy;
};

export const deleteStripe = (id: string, stripes: IStripe[]) : IStripe[] => {
    const index = stripes.findIndex(stripe => stripe.id === id);
    if(index === -1) return stripes;

    const copy = [...stripes];
    copy.splice(index, 1);

    return copy;
};

export const addStripe = (stripes: IStripe[]) : IStripe[] => {
    const newStripe: IStripe = {
        id: newId(),
        size: 10,
        color: '#fff',
    };

    const copy = [...stripes];
    copy.push(newStripe);

    return copy;
};