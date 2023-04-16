import React from 'react';
import { IStripe } from '../../interfaces';
import { deleteStripe } from '../../domain/stripes-data-provider';
import { rootActions, useAppDispatch, useAppSelector } from '../../data/store';

interface IDeleteStripeBtn {
    stripe: IStripe;
}

const DeleteStripeBtn = (props: IDeleteStripeBtn) => {

    const { stripe } = props;

    const dispatch = useAppDispatch();
    const stripes = useAppSelector(store => store.root.stripes);

    const onDeleteStripe = () => {
        const updatedStripes = deleteStripe(stripe.id, stripes);

        dispatch(
            rootActions.main({
                stripes: updatedStripes,
            })
        );
    };

    return (
        <button type="button" className="mx-2" onClick={ onDeleteStripe }>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#999" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    )
};

export default DeleteStripeBtn;