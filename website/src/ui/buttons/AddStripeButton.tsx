import React from 'react';
import { formActions, useAppDispatch, useAppSelector } from '../../data/store';
import { getRandomRGBColor } from 'mz-math';

const AddStripeButton = () => {

    const dispatch = useAppDispatch();
    const stripes = useAppSelector(store => store.form.stripes);

    const addStripeHandler = () => {
        const updated = [...stripes];

        const rgbColor = getRandomRGBColor();

        updated.push({
            color: { r: rgbColor[0], g: rgbColor[1], b: rgbColor[2], a: 1 },
            width: 20,
        });

        dispatch(
            formActions.main({
                stripes: updated,
            })
        );
    };

    return (
        <button
            type="button"
            className="bg-slate-300 text-slate-900 rounded-full px-6 py-2 mt-4 mx-4"
            onClick={ addStripeHandler }>Add Stripe</button>
    )
};

export default AddStripeButton;