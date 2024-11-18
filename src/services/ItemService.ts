import React from "react";
import { IZone, ItemType, ItemSort, ILabel } from "../types";
import { uniqueId } from 'lodash';

export const useItemService = () => React.useMemo(() => new ItemService(), []);

class ItemService {
    createZone (color: string): IZone {
        return {
            id: uniqueId().toString(),
            x: 0, y: 0,
            width: 400, height: 400,
            type: ItemType.RECT,
            sort: ItemSort.ZONE,
            draggable: true,
            rotation: 0,
            scalable: true,
            color
        }
    }
    createLabel (label: string, color: string): ILabel {
        return {
            id: uniqueId().toString(),
            label,
            color,
            x: 0, y: 0,
            width: label.length * 40, height: 20,
            type: ItemType.LABEL,
            sort: ItemSort.LABEL,
            draggable: true,
            rotation: 0,
            scalable: false
        }  
    }
}