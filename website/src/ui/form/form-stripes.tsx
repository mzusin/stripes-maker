import React from 'react';
import { useAppSelector } from '../../data/store';
import FormStripe from './form-stripe';
import AddStripeBtn from './add-stripe-btn';

const FormStripes = () => {
    const stripes = useAppSelector(store => store.root.stripes);

    return (
        <div className="my-6 grid grid-cols-4 gap-6">
            {
                stripes.map(stripe => {

                    return (
                        <FormStripe
                            key={ stripe.id }
                            stripe={ stripe }
                        />
                    )
                })
            }

            <AddStripeBtn />
        </div>
    )
};

export default FormStripes;
