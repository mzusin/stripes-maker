import React from 'react';
import { formActions, useAppDispatch, useAppSelector } from '../../data/store';
import FormRangeControl from './FormRangeControl';
import FormColorControl from './FormColorControl';
import ResetButton from '../buttons/ResetButton';
import AnimationControls from './RadioButtonControls';
import { IColor, IStripe } from '../../data/slices/form-slice';
import AddStripeButton from '../buttons/AddStripeButton';
import CloseIcon from '../icons/CloseIcon';
import FormStripe from './FormStripe';

/**
 * This form is used to update SVG preview properties.
 */
const Form = () => {

    const dispatch = useAppDispatch();

    // form properties from redux store
    const stripes = useAppSelector(store => store.form.stripes);
    const lineRotation = useAppSelector(store => store.form.lineRotation);
    const animationDuration = useAppSelector(store => store.form.animationDuration);

    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-4 mb-4 text-slate-900">
                {
                    stripes.map((stripe, i) =>
                    <FormStripe
                        key={ `stripe-${ i }` }
                        index={ i }
                        stripe={ stripe }
                    />)
                }
            </div>

            <div className="grid lg:grid-cols-2 gap-4 mt-8">

                <FormRangeControl
                    title={ 'Line Rotation' }
                    value={ lineRotation }
                    min={ 0 }
                    max={ 360 }
                    units={ '°'}
                    comment={ '(only for linear animations)' }
                    onChange={ (updatedValue: number) => {
                        dispatch(
                            formActions.main({
                                lineRotation: updatedValue,
                            })
                        );
                    }}
                />

                <FormRangeControl
                    title={ 'Animation Duration' }
                    value={ animationDuration }
                    min={ 1 }
                    max={ 180 }
                    units={ 's'}
                    onChange={ (updatedValue: number) => {
                        dispatch(
                            formActions.main({
                                animationDuration: updatedValue,
                            })
                        );
                    }}
                />

            </div>

            <div className="grid lg:grid-cols-2 gap-4">

                <AnimationControls />

                <div className="justify-self-end self-end">
                    <AddStripeButton />
                    <ResetButton />
                </div>
            </div>

        </div>
    )
};

export default Form;