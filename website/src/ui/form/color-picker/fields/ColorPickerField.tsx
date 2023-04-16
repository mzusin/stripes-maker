import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

interface IColorPickerField {
    id: string,
    value: any,
    onChange: Function,
    fix: Function,
    disableArrowKeys?: boolean,
    disableInstantValueChange?: boolean,
}

const ColorPickerField = (props: IColorPickerField) => {

    const { id, value, onChange, fix, disableArrowKeys, disableInstantValueChange } = props;

    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    /**
     * if the value is correct ---> change the value in store,
     * and also change the current value.
     * otherwise, change only the current value - probably
     * the user only edits the value. It will be fixed by user,
     * or on input blur later.
     */
    const onValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const updatedValue = evt.target.value;

        if(disableInstantValueChange){
            setCurrentValue(updatedValue);
            return;
        }

        const fixedValue = fix(updatedValue);
        if(fixedValue.toString() === updatedValue){
            setCurrentValue(fixedValue);
            onChange(fixedValue);
        }
        else{
            setCurrentValue(updatedValue);
        }
    };

    /**
     * on blur, always fix the value and send it to the store.
     */
    const onBlur = () => {
        const fixedValue = fix(currentValue);

        setCurrentValue(fixedValue);
        onChange(fixedValue);
    };

    /**
     * handle up arrow, down arrow, escape & enter
     */
    const onKeyDown = (evt: KeyboardEvent) => {

        switch (evt.key){
            case 'ArrowUp': {
                if(disableArrowKeys) return;

                const fixedValue = fix(currentValue);
                const updated = fix(fixedValue + 1);

                setCurrentValue(updated);
                onChange(updated);
                break;
            }
            case 'ArrowDown': {
                if(disableArrowKeys) return;

                const fixedValue = fix(currentValue);
                const updated = fix(fixedValue - 1);

                setCurrentValue(updated);
                onChange(updated);
                break;
            }
            case 'Escape': {
                setCurrentValue(value);
                onChange(value);
                break;
            }
            case 'Enter': {
                onBlur();
                break;
            }
        }
    };

    return (
        <input
            id={ id }
            type="text"
            className="border"
            value={ currentValue }
            onChange={ onValueChange }
            onBlur={ onBlur }
            onKeyDown={ onKeyDown }
        />
    )
};

export default ColorPickerField;