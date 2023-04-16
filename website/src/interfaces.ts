export interface IStripe {
    id: string;
    size: number;
    color: string;
}

export enum AnimationTypeEnum {
    NoAnimation = 1,
    RotateClockWise = 2,
    RotationCounterClockwise = 3,
    Linear = 4,
}