import { IColor } from '../data/slices/form-slice';

export const rgbaColorToString = (rgbaColor: IColor) => {
    return `rgba(${ rgbaColor.r }, ${ rgbaColor.g }, ${ rgbaColor.b }, ${ rgbaColor.a })`;
};