import React from "react"
import { createContextForController } from "react-controller-context";
import { SelectableItem } from "../types";

type Selection = SelectableItem | undefined;

const useController = () => {
    const [ selected, updateSelected ] = React.useState<Selection>();
    const setSelected = React.useCallback((item: Selection) => {
        if (item?.draggable || item?.scalable) {
            updateSelected(item);
        } else {
            updateSelected(undefined);
        }
    }, []);
    return {
        selected,
        setSelected,
    };
};

const context = createContextForController(useController);
export const SelectedTransformProvider = context.Provider;
export const useSelectedTransform = context.useController;