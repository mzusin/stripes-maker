import './Saturation.css';
import { MouseEvent, useCallback, useEffect, useRef } from 'react';
import throttle from 'lodash-es/throttle';
import SaturationPointer from './SaturationPointer';
import { DebouncedFunc } from 'lodash-es';
import { IColorPickerAppProps } from '../interfaces';

const Saturation = (props: IColorPickerAppProps) => {

    const saturationRef = useRef<HTMLDivElement>(null);

    const { hue, saturation, lightness, onSaturationChange } = props;
    const colorString = `hsl(${ hue }, 100%, 50%)`;

    const dragThrottle = useRef<DebouncedFunc<any>>();

    const performChange = useCallback(
        (evt: any) => {
            if(!saturationRef || !saturationRef.current) return;

            if(evt.preventDefault){
                evt.preventDefault();
            }

            const { width: boxWidth, height: boxHeight, left: boxLeft, top: boxTop } = saturationRef.current.getBoundingClientRect();

            const mouseX = typeof evt.clientX === 'number' ? evt.clientX : evt.touches[0].clientX;
            const mouseY = typeof evt.clientY === 'number' ? evt.clientY : evt.touches[0].clientY;

            let lPos = Math.min(Math.max(0, mouseX - boxLeft), boxWidth);
            let tPos = Math.min(Math.max(0, mouseY - boxTop), boxHeight);

            const saturation = lPos / boxWidth;
            const lightness = 1 - (tPos / boxHeight);

            onSaturationChange(saturation, lightness);
        }, [onSaturationChange]);

    useEffect(() => {
        dragThrottle.current = throttle((evt: any) => {
            performChange(evt);
        }, 50);

        return () => {
            if(!dragThrottle || !dragThrottle.current) return;
            dragThrottle.current.cancel();
        };
    }, [performChange]);

    const onChange = (evt: any) => {
        if(!dragThrottle || !dragThrottle.current) return;
        dragThrottle.current(evt);
    };

    const onMouseUp = () => {
        window.removeEventListener('mousemove', onChange);
        window.removeEventListener('mouseup', onChange);
    };

    const onMouseDown = (evt: MouseEvent) => {

        if(evt.preventDefault){
            evt.preventDefault();
        }

        onChange(evt);
        window.addEventListener('mousemove', onChange);
        window.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div
            ref={ saturationRef }
            className="color-picker-saturation w-full h-36 relative overflow-hidden"
            onMouseDown={ onMouseDown }
            onMouseUp={ onMouseUp }
            onTouchMove={ onChange }
            onTouchStart={ onChange }>

            <div className="absolute w-full h-full" style={{
                background: colorString,
            }}>
                <div className="absolute w-full h-full color-picker-saturation-white">
                    <div className="absolute w-full h-full color-picker-saturation-black"/>
                    <SaturationPointer
                        saturation={ saturation }
                        lightness={ lightness }
                    />
                </div>
            </div>
        </div>
    )
};

export default Saturation;
