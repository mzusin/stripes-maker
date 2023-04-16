import React from 'react';
import { useAppSelector } from '../data/store';
import { newId } from 'mz-math';
import { AnimationTypeEnum } from '../interfaces';

const Svg = () => {
    const stripes = useAppSelector(store => store.root.stripes);
    const lineRotation = useAppSelector(store => store.root.lineRotation);
    const animationType = useAppSelector(store => store.root.animationType);
    const animationDurationSeconds = useAppSelector(store => store.root.animationDurationSeconds);

    const size = stripes.reduce((prev, stripe) => prev + stripe.size, 0);
    const patternId = newId();

    const isRotateAnimation =
        animationType === AnimationTypeEnum.RotateClockWise ||
        animationType === AnimationTypeEnum.RotationCounterClockwise;

    const getStripes = () => {
        const res = [];
        let widthSum = 0;

        for(let i=0; i<stripes.length; i++){
            const stripe = stripes[i];
            const color = stripe.color;

            res.push(
                <rect
                    key={ `stripe-${ i }` }
                    x={ 0 }
                    y={ widthSum }
                    width={ '100%' }
                    height={ stripe.size }
                    fill={ stripe.color }
                />
            );

            widthSum += stripe.size;
        }

        return res;
    };

    return (
        <svg
            id="stripes-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%">

            {/* stripe pattern definition */}
            <defs>
                <pattern
                    id={  patternId  }
                    patternTransform={ `rotate(${ lineRotation })` }
                    width={ '100%' }
                    height={ size }
                    x={ 0 }
                    y={ 0 }
                    patternUnits="userSpaceOnUse">

                    {
                        isRotateAnimation &&
                        <animateTransform
                            attributeName="patternTransform"
                            begin="0s"
                            dur={ `${ animationDurationSeconds || 1 }s` }
                            type="rotate"
                            from={ animationType === AnimationTypeEnum.RotateClockWise ? '0' : `360` }
                            to={ animationType === AnimationTypeEnum.RotateClockWise ? `360` : '0' }
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    }

                    {
                        animationType === AnimationTypeEnum.Linear &&
                        <animate
                            attributeName="y"
                            begin="0s"
                            dur={ `${ (animationDurationSeconds || 100) }s` }
                            from="0"
                            to="5000px"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    }

                    <g>
                        { getStripes() }
                    </g>
                </pattern>
            </defs>

            {/* stripes container */}
            <rect x={ 0 } y={ 0 } width="100%" height="100%" fill={ `url(#${ patternId })` } />

        </svg>
    )
};

export default Svg;