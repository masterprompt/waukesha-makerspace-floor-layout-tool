import React from 'react';
import { useItems } from './ItemsProvider';
import { useFurnitureService } from '../hooks/useFurnitureService';

export const FurnitureLoader = () => {
    const { updateItem } = useItems();
    const furnitureService = useFurnitureService();
    React.useEffect(() => {
        const furniture = furnitureService.loadFurniture();
        furniture.forEach(updateItem);
    }, [])
    return null;
};