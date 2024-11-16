import React from "react"
import { useFurniture } from "./FurnitureProvider";
import { LayoutService } from "../services/LayoutService";

const layoutService = new LayoutService();
const layout = layoutService.getLayoutFromUrl();

export const LayoutLoader = () => {
    const { furniture, setDirty } = useFurniture();
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            if (layout && furniture.length) {
                layoutService.updateFurnitureWithLayout(furniture, layout);
                setDirty();
            }   
        }, 5);
        return () => clearTimeout(timeout);
           
    }, []);

    return null;
}