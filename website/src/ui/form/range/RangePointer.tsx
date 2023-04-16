import { useEffect, useRef, useState } from 'react';

interface IRangePointer {
    percent: number,
    pointerClasses?: string,
}

const RangePointer = (props: IRangePointer) => {

    const { percent, pointerClasses } = props;

    // used to find the width of the pointer
    // and make its container a bit smaller,
    // so in the corner positions the whole pointer will be seen
    const pointerRef = useRef<HTMLDivElement>(null);

    const [pointerWidth, setPointerWidth] = useState(0);

    /**
     * find the pointer width
     */
    useEffect(() => {
        if(!pointerRef || !pointerRef.current) return;

        const { width } = pointerRef.current.getBoundingClientRect();

        setPointerWidth(width);
    }, []);

    return (
        <div className="absolute w-full h-full"
            style={{
                width: `calc(100% - ${pointerWidth}px - 2px)`,
                left: `${ (pointerWidth + 1) / 2 }px`,
            }}>
            <div
                className="absolute"
                style={{
                    left: `${ percent }%`,
                }}
            >
                <div
                    ref={ pointerRef }
                    className={ `cursor-pointer ${ pointerClasses ? pointerClasses : '' }` }></div>
            </div>
        </div>
    )
};

export default RangePointer;