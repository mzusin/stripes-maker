import React from 'react';
import Badge from '../Badge';
import Range from './range/Range';

interface IFormRangeControl {
    title: string,
    value: number,
    onChange: (updatedValue: number) => void,
    min: number,
    max: number,
    units: string,
    comment?: string,
}

/**
 * scale a range [min,max] to [a,b]
 * f(x) = (b - a) * (x - min) / (max - min) + a
 */
const convertRange = (min: number, max: number, a: number, b: number, x: number) => {
    return (b - a) * (x - min) / (max - min) + a;
}

/**
 * Range Control.
 */
const FormRangeControl = (props: IFormRangeControl) => {

    const { title, value, min, max, units, onChange } = props;

    return (
        <div className="flex flex-col mb-4">
            <div className="mb-2 flex items-center">
                <span>{ title }</span>
                <Badge text={ `${ value }${ units }` } />
            </div>

            <Range
                rootClasses="relative h-1"
                pointerClasses="range-pointer-theme-1"
                value={ convertRange(min, max, 0, 100, value) }
                onChangeCallback={ (updatedValue: number) => {
                    const converted = convertRange(0, 100, min, max, updatedValue);
                    onChange(converted);
                } }>

                <>
                    <div className="absolute w-full h-full bg-gray-400 rounded-full overflow-hidden" />
                </>

            </Range>

            {
                props.comment && <span className="block mt-2 text-sm text-gray-500">{ props.comment }</span>
            }
        </div>
    )
};

export  default FormRangeControl;