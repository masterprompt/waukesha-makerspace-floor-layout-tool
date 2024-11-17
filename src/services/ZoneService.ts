import { IZone, ItemType, ItemSort } from "../types";

export class ZoneService {
    createZone (name: string): IZone {
        return {
            id: name,
            x: 0, y: 0,
            width: 400, height: 400,
            type: ItemType.RECT,
            sort: ItemSort.ZONE,
            draggable: true,
            rotation: 0,
            scalable: true
        }
    }
}