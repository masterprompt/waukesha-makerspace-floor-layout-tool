import React from "react"
import { createContextForController } from "react-controller-context";
import { IZone } from "../types";

const useController = () => {
    const [ zones ] = React.useState<IZone[]>([]);
    const [ ticks, setTicks] = React.useState(0);
    const setDirty = () => setTicks(ticks => ticks + 1);
    
    return {
        zones,
        setDirty,
        ticks,
    };
};

const context = createContextForController(useController);
export const ZonesProvider = context.Provider;
export const useZones = context.useController;