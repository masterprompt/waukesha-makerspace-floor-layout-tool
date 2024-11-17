import React from 'react';
import floorPlanImage from '../furniture/floor-plan.jpg';
import { IImage, ItemSort, ItemType } from '../types';
import { useItems } from './ItemsProvider';

const space: IImage = {
    id: 'floorPlanImage',
    x: 0,
    y: 0,
    src: floorPlanImage,
    draggable: false,
    scalable: false,
    rotation: 90,
    type: ItemType.IMAGE,
    sort: ItemSort.BASE 
}

export const SpaceLoader = () => {
    const { updateItem: onChange } = useItems();
    React.useEffect(() => {
        onChange(space);
    }, [space])
    return null;
};