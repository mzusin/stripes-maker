import './Alpha.css';
import Range from '../../range/Range';
import tinycolor from 'tinycolor2';
import { IColorPickerAppProps } from '../interfaces';

const Alpha = (props: IColorPickerAppProps) => {

    const { hue, saturation, lightness, alpha, onAlphaChange } = props;

    const rgb = tinycolor({
        h: hue,
        s: saturation,
        l: lightness,
        a: alpha
    }).toRgb();

    const background = `linear-gradient(to right, rgba(${ rgb.r },${ rgb.g },${ rgb.b }, 0) 0%, rgba(${ rgb.r },${ rgb.g },${ rgb.b }, 1) 100%)`;

    return (
        <Range
            rootClasses="relative overflow-hidden h-2.5"
            pointerClasses="range-pointer"
            value={ alpha * 100 }
            onChangeCallback={ (updatedValue: number) => {
                onAlphaChange(updatedValue / 100);
            } }>

            <>
                <div className="color-picker-transparent-bg absolute w-full h-full overflow-hidden" />
                <div
                    className="absolute w-full h-full"
                    style={{
                        background,
                    }} />
            </>

        </Range>
    )
};

export default Alpha;