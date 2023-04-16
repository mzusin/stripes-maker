import tinycolor from 'tinycolor2';
import React, { useEffect, MouseEvent, KeyboardEvent, useCallback } from 'react';
import ColorPickerPopup from '../popup/ColorPickerPopup';
import { IColorPickerAppProps } from '../interfaces';

const ColorPickerApp = (props: IColorPickerAppProps) => {

    const { hue, saturation, lightness, alpha, colorPickerPopupVisible, onPopupVisibilityChange } = props;

    const rgb = tinycolor({
        h: hue,
        s: saturation,
        l: lightness,
        a: alpha,
    }).toRgb();

    const colorString = `rgba(${ rgb.r }, ${ rgb.g }, ${ rgb.b }, ${ rgb.a })`;

    const close = useCallback(() => {
        onPopupVisibilityChange(false);
    }, [onPopupVisibilityChange]);

    const toggle = (evt: MouseEvent) => {
        const isVisible = colorPickerPopupVisible;

        // evt.stopPropagation();
        // 'setTimeout' instead of 'stopPropagation' is used
        // to close other color picker instances

        setTimeout(() => {
            onPopupVisibilityChange(!isVisible);
        }, 0);
    };

    /**
     * handle escape
     */
    const onKeyDown = (evt: KeyboardEvent) => {

        switch (evt.key){
            case 'Escape': {
                close();
                break;
            }
        }
    };

    const stopPropagation = (evt: MouseEvent) => {
        evt.stopPropagation();
    };

    useEffect(() => {
        document.addEventListener('click', close);

        return () => {
            document.removeEventListener('click', close);
        };
    }, [close]);

    return (
        <div className="relative">
            <button
                type="button"
                className="border rounded p-1 bg-white cursor-pointer"
                title="Select Color"
                onClick={ toggle }
                onKeyDown={ onKeyDown }>

                <span className="flex w-10 h-4 border border-slate-800" style={{
                    backgroundColor: colorString,
                }} />
            </button>

            <div onClick={ stopPropagation }>
                {
                    colorPickerPopupVisible &&
                    <ColorPickerPopup
                        { ...props }
                    />
                }
            </div>
        </div>
    )
};

export default ColorPickerApp;