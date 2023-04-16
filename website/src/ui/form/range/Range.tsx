import './Range.css';
import { MouseEvent, ReactNode, useCallback, useEffect, useRef } from 'react';
import RangePointer from './RangePointer';
import { DebouncedFunc } from 'lodash-es';
import throttle from 'lodash-es/throttle';

interface IRange {

    // styles
    rootClasses?: string,
    pointerClasses?: string,

    // on change callback function
    onChangeCallback: Function,

    // the initial pointer values in %
    value: number,

    // background html
    children: ReactNode,
}

const Range = (props: IRange) => {

    // this ref is used to get box position and dimensions
    const rangeRef = useRef<HTMLDivElement>(null);

    const { onChangeCallback, rootClasses, children, value, pointerClasses } = props;

    const dragThrottle = useRef<DebouncedFunc<any>>();

    const performChange = useCallback(
        (evt: any) => {
            if(!rangeRef || !rangeRef.current) return;

            if(evt.preventDefault){
                evt.preventDefault();
            }

            const { width: boxWidth, left: boxLeft } = rangeRef.current.getBoundingClientRect();

            const mouseX = typeof evt.clientX === 'number' ? evt.clientX : evt.touches[0].clientX;

            const left = Math.min(Math.max(0, mouseX - boxLeft), boxWidth);
            const updatedValue = Math.round((left * 100) / boxWidth);

            onChangeCallback(updatedValue);
        }, [onChangeCallback]);

    useEffect(() => {
        dragThrottle.current = throttle((evt: any) => {
            performChange(evt);
        }, 50);

        return () => {
            if(!dragThrottle || !dragThrottle.current) return;
            dragThrottle.current.cancel();
        };
    }, [performChange]);

    const onMouseUp = () => {
        window.removeEventListener('mousemove', onValueChange);
        window.removeEventListener('mouseup', onValueChange);
    };

    const onMouseDown = (evt: MouseEvent) => {

        if(evt.preventDefault){
            evt.preventDefault();
        }

        onValueChange(evt);
        window.addEventListener('mousemove', onValueChange);
        window.addEventListener('mouseup', onMouseUp);
    };

    const onValueChange = (evt: any) => {
        if(!dragThrottle || !dragThrottle.current) return;
        dragThrottle.current(evt);
    };

    return (
        <div
            ref={ rangeRef }
            onMouseDown={ onMouseDown }
            onMouseUp={ onMouseUp }
            onTouchMove={ onValueChange }
            onTouchStart={ onValueChange }
            className={ `range-slider relative h-2.5 ${ rootClasses ? rootClasses : '' }` }>
            <div className="absolute w-full h-full">

                { children }

                <RangePointer
                    percent={ value }
                    pointerClasses={ pointerClasses }
                />
            </div>
        </div>
    )
};

export default Range;