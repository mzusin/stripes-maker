const config = {
    out: './out/example.svg',
    width: 300,
    height: 300,
    bgColor: '#fff',
    lineRotation: 45,
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
    ],
    animationType: 4, // linear animation
    animationDuration: 30, // seconds
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