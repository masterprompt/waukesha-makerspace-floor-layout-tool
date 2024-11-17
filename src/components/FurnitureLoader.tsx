import React from 'react';
import { useItems } from './ItemsProvider';
import furniture from '../furniture';

export const FurnitureLoader = () => {
    const { onChange } = useItems();
    React.useEffect(() => {
        furniture.forEach(onChange)
    }, [furniture])
    return null;
};