export enum ItemType {
    RECT = 'z',
    IMAGE = 'i'
}

export enum ItemSort {
    BASE = 0,
    ZONE = 1,
    FURNITURE = 2
}

export interface ITransform {
    id: string;
    x: number;
    y: number;
    draggable?: boolean;
    rotation?: number;
    scalable?: boolean;
    type: ItemType;
    sort: ItemSort;
}

export interface IFurnishing extends ITransform {
    src: string;
}

export interface IImage extends ITransform {
    src: string;

}

export interface IRect extends ITransform {
    width: number;
    height: number;
}

export interface IZone extends ITransform {
    width: number;
    height: number;
}

export type SelectableItem = IZone | IFurnishing;

export enum PrimitiveType {
    Rectangle,
    Circle,
}

export interface TransformRef {
    nodes: (d: any) => void;
    getLayer: () => {
      batchDraw: () => void;
    };
}

type NumberGetSet = (v?: number) => number;
export interface ShapeRef {
    rotation: NumberGetSet;
    scaleX: NumberGetSet;
    scaleY: NumberGetSet;
    x: NumberGetSet;
    y: NumberGetSet;
    width: NumberGetSet;
    height: NumberGetSet;
}