import React from 'react';

interface IBadge {
    text: string,
}

const Badge = (props: IBadge) => {
    return (
        <span className="inline-flex items-center mx-2 text-xs py-1 px-2 rounded text-slate-100">({ props.text })</span>
    )
};

export default Badge;