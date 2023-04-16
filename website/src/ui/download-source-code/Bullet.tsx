import CheckIcon from '../icons/CheckIcon';
import React, { ReactNode } from 'react';

interface IBullet{
    children: ReactNode,
}

const Bullet = (props: IBullet) => {
    return (
        <li className="mb-2 flex items-center">
            <CheckIcon />
            <span className="ml-2">{ props.children }</span>
        </li>
    )
};

export default Bullet;