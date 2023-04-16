import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import FormColorControl from './FormColorControl';
import { IColor, IStripe } from '../../data/slices/form-slice';
import FormRangeControl from './FormRangeControl';
import { formActions, useAppDispatch, useAppSelector } from '../../data/store';

interface IFormStripe {
    index: number;
    stripe: IStripe;
}

const FormStripe = (props: IFormStripe) => {

    const { index, stripe } = props;

    const dispatch = useAppDispatch();
    const stripes = useAppSelector(store => store.form.stripes);

    /**
     * remove stripe by index
     */
    const removeStripe = () => {
        const updated = [...stripes];
        updated.splice(index, 1);

        dispatch(
            formActions.main({
                stripes: updated,
            })
        );
    };

    /**
     * change stripe width or color
     */
    const updateStripes = (updatedStripe: IStripe) => {
        const updated = [...stripes];
        updated[index] = updatedStripe;

        dispatch(
            formActions.main({
                stripes: updated,
            })
        );
    };

    return (
        <div className="px-6 py-2 bg-slate-800 text-slate-100 flex flex-col">

            <button type="button" className="ml-auto" onClick={ removeStripe }><CloseIcon /></button>

            <div className="flex">

                <FormColorControl
                    title={ 'Color' }
                    rgbaColor={ stripe.color }
                    onChange={ (updatedColor: IColor) => {
                        if(stripe.color.r === updatedColor.r &&
                            stripe.color.g === updatedColor.g &&
                            stripe.color.b === updatedColor.b &&
                            stripe.color.a === updatedColor.a) return;

                        const updatedStripe = { ...stripe };
                        updatedStripe.color = updatedColor;
                        updateStripes(updatedStripe);
                    }}
                />

                <FormRangeControl
                    title={ 'Width' }
                    value={ stripe.width }
                    min={ 1 }
                    max={ 300 }
                    units={ 'px'}
                    onChange={ (updatedValue: number) => {
                        if(stripe.width === updatedValue) return;

                        const updatedStripe = { ...stripe };
                        updatedStripe.width = updatedValue;
                        updateStripes(updatedStripe);
                    }}
                />
            </div>
        </div>
    )
};

export default FormStripe;