import React from 'react';
import { formActions, useAppDispatch, useAppSelector } from '../../data/store';
import tinycolor from 'tinycolor2';

const AddStripeButton = () => {

    const dispatch = useAppDispatch();
    const stripes = useAppSelector(store => store.form.stripes);

    const addStripeHandler = () => {
        const updated = [...stripes];

        const color = tinycolor.random();
        const argb = color.toRgb();

        updated.push({
            color: { r: argb.r, g: argb.g, b: argb.b, a: 1 },
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
            className="bg-green-200 text-gray-700 rounded-full px-6 py-2 mt-4 mx-4"
            onClick={ addStripeHandler }>Add Stripe</button>
    )
};

export default AddStripeButton;