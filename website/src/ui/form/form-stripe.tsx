import React, { useEffect, useRef } from 'react';
import { IStripe } from '../../interfaces';
import 'toolcool-color-picker';
import { updateStripe } from '../../domain/stripes-data-provider';
import { rootActions, useAppDispatch, useAppSelector } from '../../data/store';
import DeleteStripeBtn from './delete-stripe-btn';

interface IFormStripe {
    stripe: IStripe;
}

const FormStripe = (props: IFormStripe) => {

    const { stripe } = props;

    const dispatch = useAppDispatch();

    const stripes = useAppSelector(store => store.root.stripes);
    const colorPickerRef = useRef<HTMLElement>();

    /**
     * Handle color picker events.
     */
    useEffect(() => {

        const colorPicker = colorPickerRef.current;

        const onColorChange = (evt: Event) => {
            const customEvent = evt as CustomEvent;

            const updatedStripes = updateStripe(
                stripe.id,
                { ...stripe, color: customEvent.detail.hex },
                stripes
            );

            dispatch(
                rootActions.main({
                    stripes: updatedStripes,
                })
            );
        };

        colorPicker?.addEventListener('change', onColorChange);

        return () => {
            colorPicker?.removeEventListener('change', onColorChange);
        };
    }, [stripes]);

    return (
        <div className="flex justify-center" data-id={ stripe.id }>
            <toolcool-color-picker
                ref={ colorPickerRef }
                color={ stripe.color }
            />

            <DeleteStripeBtn stripe={ stripe } />
        </div>
    )
};

export default FormStripe;
