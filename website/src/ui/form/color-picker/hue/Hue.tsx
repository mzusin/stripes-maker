import './Hue.css';
import Range from '../../range/Range';
import { IColorPickerAppProps } from '../interfaces';

const Hue = (props: IColorPickerAppProps) => {

    const { hue, onHueChange } = props;

    return (
        <Range
            rootClasses="relative overflow-hidden h-2.5 my-1"
            pointerClasses="range-pointer"
            value={ (hue * 100) / 360 }
            onChangeCallback={ (updatedValue: number) => {
                onHueChange((360 * updatedValue) / 100);
            } }>

            <>
                <div className="color-picker-hue-v absolute w-full h-full">
                    <div className="color-picker-hue-h relative w-full h-full" />
                </div>
            </>

        </Range>
    )
};

export default Hue;