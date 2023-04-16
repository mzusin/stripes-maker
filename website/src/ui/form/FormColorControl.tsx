import React, { Fragment, useEffect, useRef, useState } from 'react';
import { getFormFieldId } from '../../domain/form-provider';
import Badge from '../Badge';
import { IColor } from '../../data/slices/form-slice';
import 'toolcool-color-picker';
import { rgbaColorToString } from '../../domain/color-provider';

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

    const colorPickerRef = useRef<HTMLElement>();

    useEffect(() => {

        const colorPicker = colorPickerRef.current;

        const onColorChange = (evt: Event) => {
            const customEvent = evt as CustomEvent;
            onChange(customEvent.detail.color.toRgb());
        };

        colorPicker?.addEventListener('change', onColorChange);

        return () => {
            colorPicker?.removeEventListener('change', onColorChange);
        };
    }, []);

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={ id } className="mb-2">{ title }</label>
            <div className="flex">
                <toolcool-color-picker
                    color={ rgbaColorToString(rgbaColor) }
                    ref={ colorPickerRef }
                />
                {/*<ColorPicker
                    {...rgbaColor}
                    onChange={ (updateColor: IColor) => {
                        onChange(updateColor);
                    }}
                />*/}
                <Badge text={ rgbaColorToString(rgbaColor) } />
            </div>
        </div>
    )
};

export  default FormColorControl;