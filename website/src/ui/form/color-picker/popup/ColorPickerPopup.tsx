import './ColorPickerPopup.css';
import Saturation from '../saturation/Saturation';
import Alpha from '../alpha/Alpha';
import Hue from '../hue/Hue';
import ColorPickerFields from '../fields/ColorPickerFields';
import { IColorPickerAppProps } from '../interfaces';

const ColorPickerPopup = (props: IColorPickerAppProps) => {

    return (
        <div
            className="color-picker-popup absolute p-2 bg-white shadow rounded border z-50"
            style={{
                top: 'calc(100% - 1px)',
            }}>

            <Saturation {...props} />
            <Hue {...props} />
            <Alpha {...props} />
            <ColorPickerFields {...props} />
        </div>
    )
};

export default ColorPickerPopup;