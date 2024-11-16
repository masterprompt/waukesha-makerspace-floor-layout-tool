import React from "react"
import { createContextForController } from "react-controller-context";
import { IFurnishing } from "../types";
import defaultFurniture from '../furniture';
import { useLayoutService } from "../hooks/useLayoutService";

const useController = () => {
    const [ furniture, setFurniture ] = React.useState<IFurnishing[]>(defaultFurniture);
    const [ ticks, setTicks] = React.useState(0);
    const layoutService = useLayoutService();
    const setDirty = () => setTicks(ticks => ticks + 1);
    const layout = React.useMemo(() => layoutService.generateFurnitureLayoutBase64(furniture), [ticks]);
    const onChange = React.useCallback((item: IFurnishing) => {
        if(item){
            setFurniture(furniture => [
                ...furniture.filter(f => f.id !== item.id),
                item
            ]);
            setDirty();
        }
    }, [])
    return {
        furniture,
        setDirty,
        ticks,
        layout,
        onChange
    };
};

const context = createContextForController(useController);
export const FurnitureProvider = context.Provider;
export const useFurniture = context.useController;