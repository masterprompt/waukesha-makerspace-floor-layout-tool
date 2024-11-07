import React from "react"
import { useFurniture } from "./FurnitureProvider";
import { useLayoutService } from "../hooks/useLayoutService";
import { useDebounce } from 'use-debounce';

export const LayoutUpdater = () => {
    const { layout } = useFurniture();
    const [ debouncedLayout ] = useDebounce(layout, 500);
    const layoutService = useLayoutService();

    React.useEffect(() => {
        if (debouncedLayout ) {
            layoutService.setLayoutToUrl(debouncedLayout);
        }
    }, [ debouncedLayout ]);
    return null;
}