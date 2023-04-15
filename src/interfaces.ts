export interface IStripe {
    color: string;
    width: number;
}

export interface ISettings{
    out: string;
    width: number;
    height: number;
    bgColor: string;
    lineRotation: number;
    stripes: IStripe[];
    animationType: AnimationTypeEnum;
    animationDuration: number; // seconds
}

export enum AnimationTypeEnum {
    NoAnimation = 1,
    RotateClockWise = 2,
    RotationCounterClockwise = 3,
    Linear = 4,
}