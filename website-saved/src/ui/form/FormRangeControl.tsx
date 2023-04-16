import React from 'react';
import Badge from '../Badge';
import Range from './range/Range';
import { convertRange } from 'mz-math';

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
 * Range Control.
 */
const FormRangeControl = (props: IFormRangeControl) => {

    const { title, value, min, max, units, onChange } = props;

    return (
        <div className="flex flex-col mb-4 w-full">
            <div className="mb-4 flex items-center">
                <span>{ title }</span>
                <Badge text={ `${ value }${ units }` } />
            </div>

            <Range
                rootClasses="relative h-1"
                pointerClasses="range-pointer-theme-1"
                value={ convertRange(value, min, max, 0, 100) }
                onChangeCallback={ (updatedValue: number) => {
                    const converted = Math.round(convertRange(updatedValue, 0, 100, min, max));
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