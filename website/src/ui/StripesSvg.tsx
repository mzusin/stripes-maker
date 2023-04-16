import { AnimationTypeEnum } from '../enums/AnimationTypeEnum';
import { IStripe } from '../data/slices/form-slice';

export interface IStripesSVG {
    id: string,
    stripes: IStripe[],
    lineRotation: number,
    animationType?: AnimationTypeEnum,
    animationDuration?: number,
    classes?: string,
}

/**
 * Main stripes SVG.
 */
const StripesSvg = (props: IStripesSVG) => {

    const { stripes } = props;
    const size = stripes.reduce((prev, stripe) => prev + stripe.width, 0);

    const isRotateAnimation =
        props.animationType === AnimationTypeEnum.RotateClockWise ||
        props.animationType === AnimationTypeEnum.RotationCounterClockwise;

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
                    height={ stripe.width }
                    fill={ `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })` }
                />
            );

            widthSum += stripe.width;
        }

        return res;
    };

    return (
        <svg
            id="stripes-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={ props.classes }>

            {/* stripe pattern definition */}
            <defs>
                <pattern
                    id={  props.id  }
                    patternTransform={ `rotate(${ props.lineRotation })` }
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
                            dur={ `${ props?.animationDuration || 1 }s` }
                            type="rotate"
                            from={ props.animationType === AnimationTypeEnum.RotateClockWise ? '0' : `360` }
                            to={ props.animationType === AnimationTypeEnum.RotateClockWise ? `360` : '0' }
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    }

                    {
                        props.animationType === AnimationTypeEnum.Linear &&
                        <animate
                            attributeName="y"
                            begin="0s"
                            dur={ `${ props?.animationDuration || 1 }s` }
                            from="0%"
                            to="100%"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    }

                    <g
                        x={ 0 }
                        y={ 0 }
                        width={ '100%' }
                        height={ size }>

                        { getStripes() }
                    </g>
                </pattern>
            </defs>

            {/* stripes container */}
            <rect x={ 0 } y={ 0 } width="100%" height="100%" fill={ `url(#${ props.id })` } />

        </svg>
    )
};

export default StripesSvg;