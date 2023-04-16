import { createSlice } from '@reduxjs/toolkit';
import { AnimationTypeEnum, IStripe } from '../interfaces';
import { newId } from 'mz-math';

export interface IRootState{
    stripes: IStripe[];
    lineRotation: number;
    animationType: AnimationTypeEnum;
    animationDurationSeconds: number;
}

/**
 * initial state
 */
const initialState: IRootState = {
    lineRotation: 45,
    animationType: AnimationTypeEnum.Linear,
    animationDurationSeconds: 100,
    stripes: [
        {
            id: newId(),
            size: 20,
            color: '#505050',
        },
        {
            id: newId(),
            size: 10,
            color: '#92CBFA',
        },
        {
            id: newId(),
            size: 20,
            color: '#AB3C83',
        },
        {
            id: newId(),
            size: 10,
            color: '#FFFFFF',
        }
    ],
};

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {

        main(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    }
});

export default rootSlice;