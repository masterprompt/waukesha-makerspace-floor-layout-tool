import React from "react"
import { createContextForController } from "react-controller-context";
import { ITransform } from "../types";
import { sortBy } from "lodash";
import { useSelectedTransform } from "./SelectedTransformProvider";

const removeItem = (items:ITransform[], item?: ITransform) => items.filter(i => i.id !== item?.id);
const sortItems = (items: ITransform[]) => sortBy(items, 'sort' );

const useController = () => {
    const [ items, updateItems ] = React.useState<ITransform[]>([]);
    const { selected, setSelected } = useSelectedTransform();
    const updateItem = React.useCallback((item: ITransform) => {
        if(item){
            updateItems(items => sortItems([
                ...removeItem(items, item),
                item
            ]));
        }
    }, []);
    const deleteItem = React.useCallback((item?: ITransform) => {
        updateItems(items => sortItems(removeItem(items, item)));
        if (selected?.id === item?.id) {
            setSelected(undefined);
        }
    }, []);
    React.useEffect(() => {
        console.log('items Updated:', items)
    }, [items]);
    return {
        items,
        updateItem,
        deleteItem
    };
};

const context = createContextForController(useController);
export const ItemsProvider = context.Provider;
export const useItems = context.useController;