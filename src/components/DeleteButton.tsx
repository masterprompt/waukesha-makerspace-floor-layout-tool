import { Button } from "react-bootstrap"
import { Trash as Icon } from 'react-bootstrap-icons';
import { useSelectedTransform } from "./SelectedTransformProvider";
import { ItemType } from "../types";
import { useItems } from "./ItemsProvider";

const determineLabel = (type?: ItemType) => {
    switch(type) {
        case ItemType.RECT: return 'Zone';
        case ItemType.LABEL: return 'Label';
        default: return 'Unknown';
    }
};

const isEnabled = (type?: ItemType) => {
    switch(type) {
        case ItemType.RECT:
        case ItemType.LABEL: 
            return true;
        default: return false;
    }
}

export const DeleteButton = () => {
    const { deleteItem } = useItems();
    const { selected } = useSelectedTransform();
    const enabled = isEnabled(selected?.type);
    const label = `Delete ${determineLabel(selected?.type)}`;
    return (
        <Button
            onClick={() => deleteItem(selected)}
            title={label}
            disabled={!enabled}
        >
            <Icon />
        </Button>
    );
};