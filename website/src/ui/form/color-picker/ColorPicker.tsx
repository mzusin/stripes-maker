import React, { useEffect, useState } from 'react';
import ColorPickerApp from './app/ColorPickerApp';
import { IColorPickerProps } from './interfaces';
import tinycolor from 'tinycolor2';

const ColorPicker = (props: IColorPickerProps) => {

    const { r, g, b, a, onChange } = props;

    const [hue, setHue] = useState(0);
    const [saturation, setSaturation] = useState(0);
    const [lightness, setLightness] = useState(0);
    const [alpha, setAlpha] = useState(1);

    const [colorPickerPopupVisible, setColorPickerPopupVisible] = useState(false);

    /**
     * colors init
     */
    useEffect(() => {
        const color = tinycolor({ r, g, b, a });
        const hsl = color.toHsl();

        setHue(hsl.h);
        setSaturation(hsl.s);
        setLightness(hsl.l);
        setAlpha(hsl.a);
    }, [r, g, b, a]);

    const updateColor = (hue: number, saturation: number, lightness: number, alpha: number) => {
        const color = tinycolor({
            h: hue,
            s: saturation,
            l: lightness,
            a: alpha,
        });

        const rgb = color.toRgb();
        onChange({
            r: rgb.r,
            g: rgb.g,
            b: rgb.b,
            a: rgb.a,
        });
    };

    return (
        <ColorPickerApp
            hue={ hue }
            saturation={ saturation }
            lightness={ lightness }
            alpha={ alpha }
            colorPickerPopupVisible={ colorPickerPopupVisible }

            onPopupVisibilityChange={ (isPopupVisible: boolean) => {
                setColorPickerPopupVisible(isPopupVisible);
            }}

            onHueChange={ (updatedValue: number) => {
                setHue(updatedValue);
                updateColor(updatedValue, saturation, lightness, alpha);
            }}

            onSaturationChange={ (updatedSaturation: number, updatedLightness: number) => {
                setSaturation(updatedSaturation);
                setLightness(updatedLightness);
                updateColor(hue, updatedSaturation, updatedLightness, alpha);
            }}

            onLightnessChange={ (updatedHue: number, updatedSaturation: number, updatedLightness: number, updatedAlpha: number) => {
                setHue(updatedHue);
                setSaturation(updatedSaturation);
                setLightness(updatedLightness);
                setAlpha(updatedAlpha);
                updateColor(updatedHue, updatedSaturation, updatedLightness, updatedAlpha);
            }}

            onAlphaChange={ (updatedValue: number) => {
                setAlpha(updatedValue);
                updateColor(hue, saturation, lightness, updatedValue);
            }}
        />
    )
};

export default ColorPicker;