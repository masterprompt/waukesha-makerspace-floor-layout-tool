import { IImage, ItemType, ItemSort, IFurnishing } from "../types";
import furniture from '../furniture';

function randInt(min: number, max: number) {
    const range = max-min;
    return min + Math.floor(Math.random() * range);
}

export class FurnitureService {
    loadFurniture (): IFurnishing[] {
        return Object.keys(furniture).map(key => this.createItem(key, furniture[key]))
    }
    createItem (id: IImage['id'], src: IImage['src']): IImage {
        return {
            id,
            x: randInt(-602, 1354),
            y: randInt(-594, 516),
            src,
            draggable: true,
            rotation: 0,
            type: ItemType.IMAGE,
            sort: ItemSort.FURNITURE
        };
    }
}