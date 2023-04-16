const config = {
    out: './out/example.svg',  // the pass to the output file
    width: 300, // SVG width
    height: 300, // SVG height
    bgColor: '#fff', // SVG background color
    lineRotation: 45, // stripes rotation angle in degrees

    // optional animation -----------
    animationType: 4, // linear animation - see types list below
    animationDuration: 30, // seconds

    // the list of stripes ----------
    stripes: [
        {
            color: '#505050',
            size: 20,
        },
        {
            color: '#92CBFA',
            size: 10,
        },
        {
            color: '#AB3C83',
            size: 20,
        },
        {
            color: '#ffffff',
            size: 10,
        }
    ]
};

/*
animationType:
--------------
NoAnimation = 1,
RotateClockWise = 2,
RotationCounterClockwise = 3,
Linear = 4,
 */

export default config;