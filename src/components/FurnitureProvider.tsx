import React from "react"
import { createContextForController } from "react-controller-context";
import { IImage } from "../types";
import defaultFurniture from '../furniture';
import { useLayoutService } from "../hooks/useLayoutService";

const useController = () => {
    const [ furniture ] = React.useState<IImage[]>(defaultFurniture);
    const [ ticks, setTicks] = React.useState(0);
    const layoutService = useLayoutService();
    const setDirty = () => setTicks(ticks => ticks + 1);
    const layout = React.useMemo(() => layoutService.generateFurnitureLayoutBase64(furniture), [ticks]);
    
    return {
        furniture,
        setDirty,
        ticks,
        layout
    };
};

const context = createContextForController(useController);
export const FurnitureProvider = context.Provider;
export const useFurniture = context.useController;