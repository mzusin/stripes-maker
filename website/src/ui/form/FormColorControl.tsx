import { useState } from 'react';
import { getFormFieldId } from '../../domain/form-provider';
import Badge from '../Badge';
import ColorPicker from './color-picker/ColorPicker';
import { IColor } from '../../data/slices/form-slice';
import tinycolor from 'tinycolor2';

interface IFormColorControl {
    title: string,
    rgbaColor: IColor,
    onChange: (color: IColor) => void,
}

/**
 * Color Picker Control.
 */
const FormColorControl = (props: IFormColorControl) => {

    const [id] = useState(getFormFieldId(props.title));

    const { title, rgbaColor, onChange } = props;

    const getBadgeColor = () => {
        const color = tinycolor({ r: rgbaColor.r, g: rgbaColor.g, b: rgbaColor.b, a: rgbaColor.a });

        if(rgbaColor.a >= 1){
            return color.toHexString();
        }

        return color.toHex8String();
    };

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={ id } className="mb-2">{ title }</label>
            <div className="flex">
                <ColorPicker
                    {...rgbaColor}
                    onChange={ (updateColor: IColor) => {
                        onChange(updateColor);
                    }}
                />
                <Badge text={ getBadgeColor() } />
            </div>
        </div>
    )
};

export  default FormColorControl;