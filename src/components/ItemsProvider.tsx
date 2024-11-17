import React from "react"
import { createContextForController } from "react-controller-context";
import { ITransform } from "../types";
import { sortBy } from "lodash";

const useController = () => {
    const [ items, updateItems ] = React.useState<ITransform[]>([]);
    const onChange = React.useCallback((item: ITransform) => {
        if(item){
            updateItems(items => sortBy([
                ...items.filter(i => i.id !== item.id),
                item
            ], 'sort' ));
        }
    }, []);
    React.useEffect(() => {
        console.log('items Updated:', items)
    }, [items]);
    return {
        items,
        onChange
    };
};

const context = createContextForController(useController);
export const ItemsProvider = context.Provider;
export const useItems = context.useController;