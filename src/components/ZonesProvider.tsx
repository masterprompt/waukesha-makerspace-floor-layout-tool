import React from "react"
import { createContextForController } from "react-controller-context";
import { ItemSort, ItemType, ITransform, IZone } from "../types";

const useController = () => {
    const [ zones, setZones ] = React.useState<IZone[]>([]);
    const onChange = React.useCallback((item: IZone) => {
        if(item){
            setZones(items => [
                ...items.filter(i => i.id !== item.id),
                item
            ]);
        }
    }, []);

    const addZone = React.useCallback(() => {
        setZones(z => [
            ...z,
            {
                id: 'zone',
                x: 0,
                y: 0,
                width: 800,
                height: 800,
                draggable: true,
                rotation: 0,
                scalable: true,
                type: ItemType.RECT,
                sort: ItemSort.BASE
            }
        ])
    }, []);
    const deleteZone = React.useCallback((item?: ITransform) => {
        setZones(zones => zones.filter(z => z.id !== item?.id));
    }, []);
    React.useEffect(() => {
        console.log('zones changed:', zones)
    }, [zones]);
    return {
        zones,
        onChange,
        addZone,
        deleteZone
    };
};

const context = createContextForController(useController);
export const ZonesProvider = context.Provider;
export const useZones = context.useController;