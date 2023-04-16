import React from 'react';
import { useAppSelector } from '../../data/store';
import FormStripe from './form-stripe';
import AddStripeBtn from './add-stripe-btn';
import DownloadSvg from './download-svg';
import ResetBtn from './reset-btn';

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

            { stripes.length > 0 && <DownloadSvg /> }

            <ResetBtn />
        </div>
    )
};

export default FormStripes;
