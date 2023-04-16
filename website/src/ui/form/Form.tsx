import React from 'react';
import { formActions, useAppDispatch, useAppSelector } from '../../data/store';
import FormRangeControl from './FormRangeControl';
import FormColorControl from './FormColorControl';
import ResetButton from '../buttons/ResetButton';
import AnimationControls from './RadioButtonControls';
import { IColor, IStripe } from '../../data/slices/form-slice';
import AddStripeButton from '../buttons/AddStripeButton';
import CloseIcon from '../icons/CloseIcon';

/**
 * This form is used to update SVG preview properties.
 */
const Form = () => {

    const dispatch = useAppDispatch();

    // form properties from redux store
    const stripes = useAppSelector(store => store.form.stripes);
    const lineRotation = useAppSelector(store => store.form.lineRotation);
    const animationDuration = useAppSelector(store => store.form.animationDuration);

    /**
     * change stripe width or color
     */
    const updateStripes = (index: number, stripe: IStripe) => {
        const updated = [...stripes];
        updated[index] = stripe;
        dispatch(
            formActions.main({
                stripes: updated,
            })
        );
    };

    /**
     * remove stripe by index
     */
    const removeStripe = (index: number) => {
        const updated = [...stripes];
        updated.splice(index, 1);

        dispatch(
            formActions.main({
                stripes: updated,
            })
        );
    };

    return (
        <div>

            <div className="grid lg:grid-cols-2 gap-4 mb-4 text-slate-900">
                {
                    stripes.map((stripe, i) => {

                        return (
                           <div key={ `stripe-${i}` } className="px-6 py-2 bg-slate-800 text-slate-100 flex flex-col">

                               <button type="button" className="ml-auto" onClick={ () => {
                                   removeStripe(i);
                               }}><CloseIcon /></button>

                              <div className="flex">

                                  <FormColorControl
                                      title={ 'Color' }
                                      rgbaColor={ stripe.color }
                                      onChange={ (updatedColor: IColor) => {
                                          const updatedStripe = {...stripe};
                                          updatedStripe.color = updatedColor;
                                          updateStripes(i, updatedStripe);
                                      }}
                                  />

                                  <FormRangeControl
                                      title={ 'Width' }
                                      value={ stripe.width }
                                      min={ 1 }
                                      max={ 300 }
                                      units={ 'px'}
                                      onChange={ (updatedValue: number) => {
                                          const updatedStripe = {...stripe};
                                          updatedStripe.width = updatedValue;
                                          updateStripes(i, updatedStripe);
                                      }}
                                  />
                              </div>
                           </div>
                       )
                    })
                }

            </div>

            <div className="grid lg:grid-cols-2 gap-4">

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