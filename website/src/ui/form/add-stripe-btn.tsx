import React from 'react';
import { addStripe, deleteStripe } from '../../domain/stripes-data-provider';
import { rootActions, useAppDispatch, useAppSelector } from '../../data/store';

const AddStripeBtn = () => {

    const dispatch = useAppDispatch();
    const stripes = useAppSelector(store => store.root.stripes);

    const onAddStripe = () => {
        const updatedStripes = addStripe(stripes);

        dispatch(
            rootActions.main({
                stripes: updatedStripes,
            })
        );
    };

    return (
        <button type="button" className="flex justify-center" onClick={ onAddStripe }>
            Add
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ml-2"
                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round"
                 strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 5l0 14"></path>
                <path d="M5 12l14 0"></path>
            </svg>
        </button>
    )
};

export default AddStripeBtn;