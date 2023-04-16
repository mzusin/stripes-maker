import { createSlice } from '@reduxjs/toolkit';
import { getFromSessionStorage, saveToSessionStorage } from '../storage';
import { AnimationTypeEnum } from '../../enums/AnimationTypeEnum';

export interface IColor{
    r: number, // [0, 255]
    g: number, // [0, 255]
    b: number, // [0, 255]
    a: number, // [0, 1]
}

export interface IStripe {
    color: IColor,
    width: number,
}

export const formDefaults: IFormState = {
    stripes: [
        {
            color: { r: 80, g: 80, b: 80, a: 1 },
            width: 20,
        },
        {
            color: { r: 146, g: 203, b: 250, a: 1 },
            width: 10,
        },
        {
            color: { r: 171, g: 60, b: 131, a: 1 },
            width: 20,
        },
        {
            color: { r: 255, g: 255, b: 255, a: 1 },
            width: 10,
        }
    ],
    lineRotation: 45,
    animationType: AnimationTypeEnum.Linear,
    animationDuration: 30, // seconds
};

export interface IFormState{
    stripes: IStripe[],
    lineRotation: number,
    animationType: AnimationTypeEnum,
    animationDuration: number, // seconds
}

// try get data from session storage
const savedData = getFromSessionStorage();

/**
 * initial state
 */
const initialState: IFormState = {
    stripes: savedData?.stripes || formDefaults.stripes,
    lineRotation: savedData?.lineRotation || formDefaults.lineRotation,
    animationType: savedData?.animationType || formDefaults.animationType,
    animationDuration: savedData?.animationDuration || formDefaults.animationDuration,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {

        main(state, action) {

            const updated = {
                ...state,
                ...action.payload,
            };

            // save to the session storage for the future use
            saveToSessionStorage(updated);

            return updated;
        },
    }
});

export default formSlice;