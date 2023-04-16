export interface IColorPickerProps {
    r: number,
    g: number,
    b: number,
    a: number,
    onChange: Function,
}

export interface IColorPickerAppProps {

    // color properties
    hue: number, // [0, 360]
    saturation: number, // [0, 1]
    lightness: number, // [0, 1]
    alpha: number, // [0, 1]

    // popup properties
    colorPickerPopupVisible: boolean,

    // callback functions
    onHueChange: (updatedHue: number) => void,
    onSaturationChange: (updatedSaturation: number, updatedLightness: number) => void,
    onLightnessChange: (updatedHue: number, updatedSaturation: number, updatedLightness: number, updatedAlpha: number) => void,
    onAlphaChange: (updatedAlpha: number) => void,

    onPopupVisibilityChange: (isPopupVisible: boolean) => void,
}