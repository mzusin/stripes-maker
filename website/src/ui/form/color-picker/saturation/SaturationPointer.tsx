interface ISaturationPointerProps {
    lightness: number,
    saturation: number,
}

const SaturationPointer = (props: ISaturationPointerProps) => {

    const { lightness, saturation } = props;

    const top = `${ -(lightness * 100) + 100 }%`;
    const left = `${ saturation * 100 }%`;

    return (
        <div
            className="absolute cursor-pointer"
            style={{
                top,
                left,
            }}>

            <div className="w-1 h-1 rounded-full color-picker-saturation-pointer" />
        </div>
    )
};

export default SaturationPointer;