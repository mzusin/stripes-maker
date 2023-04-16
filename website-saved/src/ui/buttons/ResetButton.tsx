import React from 'react';
import { formActions, useAppDispatch } from '../../data/store';
import { formDefaults } from '../../data/slices/form-slice';
import { toast } from 'react-toastify';

const ResetButton = () => {

    const dispatch = useAppDispatch();

    const resetHandler = () => {
        dispatch(
            formActions.main(formDefaults)
        );

        // https://fkhadra.github.io/react-toastify/introduction/
        toast('Done successfully.');
    };

    return (
        <button
            type="button"
            className="bg-gray-200 text-gray-500 rounded-full px-10 py-2 mt-4"
            onClick={ resetHandler }>Reset</button>
    )
};

export default ResetButton;