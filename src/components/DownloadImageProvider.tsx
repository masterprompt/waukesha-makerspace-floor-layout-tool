import React from "react"
import { createContextForController } from "react-controller-context";

interface KonvaRef { 
    toDataURL: () => string;
}

const useController = () => {
    const konvaRef = React.useRef(null);
    const downloadImage = React.useCallback(()=> {
        const konvaUrlGenerator = konvaRef.current as unknown as KonvaRef
        const uri: string = konvaUrlGenerator.toDataURL();
        const link = document.createElement('a');
        link.href = uri;
        link.download = 'Waukesha Makerspace Beta Floorplan Proposal';
        link.download = 'Waukesha Makerspace Beta Floorplan Proposal.png'
        link.click();
    },[konvaRef]);
    return {
        konvaRef,
        downloadImage
    };
};

const context = createContextForController(useController);
export const DownloadImageProvider = context.Provider;
export const useDownloadImage = context.useController;