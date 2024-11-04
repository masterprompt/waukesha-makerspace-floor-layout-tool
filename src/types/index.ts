export interface ITransform {
    id: number | string;
    x: number;
    y: number;
}

export interface IImage extends ITransform {
    src: string;
    draggable?: boolean;
    rotation?: number;
}

export enum PrimitiveType {
    Rectangle,
    Circle,
}

export interface IPrimitive extends ITransform {
    type: PrimitiveType;
    fill: string;
}

export interface IRectangle extends IPrimitive {
    width: number;
    height: number;
}

export interface ICircle extends IPrimitive {
    radius: number;
}

export interface IShape {
    primitives: IPrimitive[];
}