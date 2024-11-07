import React from "react"
import { createContextForController } from "react-controller-context";

const scaleBy = 1.02;

const useController = () => {
    const [ scale, setScale ] = React.useState(0.5);

    const zoom = (direction: number, fast?: boolean) => {
        const scaleMod = fast ? scaleBy * 1.2 : scaleBy;
        setScale(scale =>  direction > 0 ? scale * scaleMod : scale / scaleMod);
    }

    return {
        scale,
        zoom
    };
};

const context = createContextForController(useController);
export const ZoomProvider = context.Provider;
export const useZoom = context.useController;