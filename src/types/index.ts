export enum ItemType {
    RECT = 'r',
    IMAGE = 'i',
    LABEL = 'l'
}

export enum ItemSort {
    BASE = 0,
    ZONE = 1,
    FURNITURE = 2,
    LABEL = 3
}

export interface ITransform {
    id: string;
    x: number;
    y: number;
    width?: number;
    height?: number;
    draggable?: boolean;
    rotation?: number;
    scalable?: boolean;
    type: ItemType;
    sort: ItemSort;
}



export interface IImage extends ITransform {
    src: string;

}

export type IFurnishing = IImage;

export interface IRect extends ITransform {
    width: number;
    height: number;
    color: string;
}

interface ILabeled {
    label: string;
}

export type IZone = IRect;
export type ILabel = IRect & ILabeled;

export type SelectableItem = IRect | IZone | IFurnishing | ILabel;

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