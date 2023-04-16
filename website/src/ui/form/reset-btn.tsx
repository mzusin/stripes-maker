import React from 'react';
import { rootActions, useAppDispatch } from '../../data/store';
import { INITIAL_STRIPES } from '../../data/root-slice';

const ResetBtn = () => {

    const dispatch = useAppDispatch();

    const onReset = () => {

        dispatch(
            rootActions.main({
                stripes: INITIAL_STRIPES,
            })
        );
    };

    return (
        <button type="button" className="flex justify-center" onClick={ onReset }>
            Reset
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="24"
                 height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
            </svg>
        </button>
    )
};

export default ResetBtn;