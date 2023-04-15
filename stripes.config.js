const config = {
    out: 'test.svg',
    width: 300,
    height: 300,
    bgColor: '#fff',
    lineRotation: 45,
    stripes: [
        {
            color: '#505050',
            width: 20,
        },
        {
            color: '#92CBFA',
            width: 10,
        },
        {
            color: '#AB3C83',
            width: 20,
        },
        {
            color: '#ffffff',
            width: 10,
        }
    ],
    animationType: 4,
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