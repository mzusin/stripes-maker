import './ColorPickerFields.css';
import tinycolor from 'tinycolor2'; // https://github.com/bgrins/TinyColor
import uniqueId from 'lodash-es/uniqueId';
import { useState } from 'react';
import ColorPickerField from './ColorPickerField';
import { IColorPickerAppProps } from '../interfaces';

const ColorPickerFields = (props: IColorPickerAppProps) => {

    const [hexId] = useState(uniqueId('hex-'));
    const [rid] = useState(uniqueId('r-'));
    const [gid] = useState(uniqueId('g-'));
    const [bid] = useState(uniqueId('b-'));
    const [aid] = useState(uniqueId('a-'));

    const { hue, saturation, lightness, alpha, onAlphaChange, onLightnessChange } = props;

    const color = tinycolor({
        h: hue,
        s: saturation,
        l: lightness,
        a: alpha,
    });

    const rgb = color.toRgb();

    /**
     * receives a hex value without '#'
     */
    const updateHex = (updatedValue: number) => {
        const updatedColor = tinycolor(`#${ updatedValue }`);
        const hsl = updatedColor.toHsl();
        onLightnessChange(hsl.h, hsl.s, hsl.l, hsl.a);
    };

    /**
     * receives a value in the range [0, 255]
     */
    const updateR = (updatedValue: number) => {
        const updatedColor = tinycolor({ r: updatedValue, g: rgb.g, b: rgb.b, a: rgb.a });
        const hsl = updatedColor.toHsl();
        onLightnessChange(hsl.h, hsl.s, hsl.l, hsl.a);
    };

    /**
     * receives a value in the range [0, 255]
     */
    const updateG = (updatedValue: number) => {
        const updatedColor = tinycolor({ r: rgb.r, g: updatedValue, b: rgb.b, a: rgb.a });
        const hsl = updatedColor.toHsl();
        onLightnessChange(hsl.h, hsl.s, hsl.l, hsl.a);
    };

    /**
     * receives a value in the range [0, 255]
     */
    const updateB = (updatedValue: number) => {

        const updatedColor = tinycolor({ r: rgb.r, g: rgb.g, b: updatedValue, a: rgb.a });
        const hsl = updatedColor.toHsl();
        onLightnessChange(hsl.h, hsl.s, hsl.l, hsl.a);
    };

    /**
     * receives a value in the range [0, 100]
     */
    const updateA = (updatedValue: number) => {
        onAlphaChange(updatedValue / 100);
    };

    const fixHex = (updatedValue: any) => {
        const updatedColor = tinycolor(`#${ updatedValue }`);
        if(updatedColor.isValid()){
            return updatedValue;
        }

        // if color is not valid, return the black color
        return '000000';
    };

    /**
     * returns a number in the range [0, 255]
     */
    const fixRGB = (updatedValue: any) => {
        let value = Number(updatedValue) || 0;
        value = Math.round(value);
        value = Math.max(0, value);
        value = Math.min(255, value);
        return value;
    };

    /**
     * returns a number in the range [0, 100]
     */
    const fixPercent = (updatedValue: any) => {
        let value = Number(updatedValue) || 100;
        value = Math.round(value);
        value = Math.max(0, value);
        value = Math.min(100, value);
        return value;
    };

    return (
        <div className="color-picker-fields grid gap-1 mt-1 text-center">
            <ColorPickerField
                id={ hexId }
                value={ color.toHex().toUpperCase() }
                onChange={ updateHex }
                fix={ fixHex }
                disableArrowKeys={ true }
                disableInstantValueChange={ true }
            />

            <ColorPickerField
                id={ rid }
                value={ rgb.r }
                onChange={ updateR }
                fix={ fixRGB }
            />

            <ColorPickerField
                id={ gid }
                value={ rgb.g }
                onChange={ updateG }
                fix={ fixRGB }
            />

            <ColorPickerField
                id={ bid }
                value={ rgb.b }
                onChange={ updateB }
                fix={ fixRGB }
            />

            <ColorPickerField
                id={ aid }
                value={ alpha * 100 }
                onChange={ updateA }
                fix={ fixPercent }
            />

            <label htmlFor={ hexId }>Hex</label>
            <label htmlFor={ rid }>R</label>
            <label htmlFor={ gid }>G</label>
            <label htmlFor={ bid }>B</label>
            <label htmlFor={ aid }>A</label>
        </div>
    )
};

export default ColorPickerFields;