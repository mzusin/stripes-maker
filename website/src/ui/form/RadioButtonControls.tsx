import React, { ChangeEvent } from 'react';
import { formActions, useAppDispatch, useAppSelector } from '../../data/store';
import { AnimationTypeEnum } from '../../enums/AnimationTypeEnum';
import RotateIcon from '../icons/RotateIcon';
import RotateClockWiseIcon from '../icons/RotateClockWiseIcon';
import ArrowsIcon from '../icons/ArrowsIcon';

const RadioButtonControls = () => {

    const dispatch = useAppDispatch();
    const animationType = useAppSelector(store => store.form.animationType);

    const handleAnimationTypeChange = (evt: ChangeEvent<HTMLInputElement>) => {

        const updatedValue = Number(evt.target.value) || AnimationTypeEnum.RotateClockWise;

        dispatch(
            formActions.main({
                animationType: updatedValue,
            })
        );
    };

    return (
        <div className="animation-radio-buttons px-4 py-3 bg-gray-50 text-slate-900">
            <div className="mb-2">Animation</div>
            <div className="flex flex-wrap text-sm">

                <label className="flex items-center cursor-pointer" title="Linear Rotation">
                    <input
                        type="radio"
                        name="animation-type"
                        value={ AnimationTypeEnum.Linear }
                        className="mr-2 hidden"
                        checked={ animationType === AnimationTypeEnum.Linear }
                        onChange={ handleAnimationTypeChange }
                    />
                    <div className="px-4 py-1">
                        <ArrowsIcon />
                    </div>
                </label>

                <label className="flex items-center cursor-pointer" title="Clockwise Rotation">
                    <input
                        type="radio"
                        name="animation-type"
                        value={ AnimationTypeEnum.RotateClockWise }
                        className="mr-2 hidden"
                        checked={ animationType === AnimationTypeEnum.RotateClockWise }
                        onChange={ handleAnimationTypeChange }
                    />
                    <div className="px-4 py-1">
                        <RotateClockWiseIcon />
                    </div>
                </label>

                <label className="flex items-center cursor-pointer" title="Counter Clockwise Rotation">
                    <input
                        type="radio"
                        name="animation-type"
                        value={ AnimationTypeEnum.RotationCounterClockwise }
                        className="mr-2 hidden"
                        checked={ animationType === AnimationTypeEnum.RotationCounterClockwise }
                        onChange={ handleAnimationTypeChange }
                    />
                    <div className="px-4 py-1">
                        <RotateIcon />
                    </div>
                </label>

                <label className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="animation-type"
                        value={ AnimationTypeEnum.NoAnimation }
                        className="mr-2 hidden"
                        checked={ animationType === AnimationTypeEnum.NoAnimation }
                        onChange={ handleAnimationTypeChange }
                    />
                    <div className="px-4 py-1">
                        No Animation
                    </div>
                </label>

            </div>
        </div>
    )
};

export default RadioButtonControls;