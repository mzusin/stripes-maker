import React from 'react';

interface IBadge {
    text: string,
}

const Badge = (props: IBadge) => {
    return (
        <span className="flex items-center mx-4 bg-green-100 text-xs py-1 px-2 rounded text-slate-900">{ props.text }</span>
    )
};

export default Badge;