import React from "react"
import { createContextForController } from "react-controller-context";
import { IImage } from "../types";
import defaultFurniture from '../furniture';

const useController = () => {
    const [ furniture ] = React.useState<IImage[]>(defaultFurniture);

    return {
        furniture
    };
};

const context = createContextForController(useController);
export const FurnitureProvider = context.Provider;
export const useFurniture = context.useController;