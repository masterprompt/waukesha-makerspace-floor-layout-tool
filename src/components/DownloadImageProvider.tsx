import React from "react"
import { createContextForController } from "react-controller-context";

const useController = () => {
    const konvaRef = React.useRef(null);
    const downloadImage = React.useCallback(()=> {
        const uri: string = (konvaRef.current && konvaRef.current.toDataURL()) as string;
        const link = document.createElement('a');
        link.href = uri;
        link.download = 'Waukesha Makerspace Beta Floorplan Proposal';
        link.download = 'Waukesha Makerspace Beta Floorplan Proposal.png'
        link.click();
        console.log(uri);
    },[konvaRef]);
    return {
        konvaRef,
        downloadImage
    };
};

const context = createContextForController(useController);
export const DownloadImageProvider = context.Provider;
export const useDownloadImage = context.useController;