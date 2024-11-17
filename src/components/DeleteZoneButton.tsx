import { Button } from "react-bootstrap"
import { FileMinus as Icon } from 'react-bootstrap-icons';
import { useSelectedTransform } from "./SelectedTransformProvider";
import { ItemType } from "../types";
import { useItems } from "./ItemsProvider";

export const DeleteZoneButton = () => {
    const { deleteItem } = useItems();
    const { selected } = useSelectedTransform();
    const enabled = selected?.type === ItemType.RECT;
    return (
        <Button
            onClick={() => deleteItem(selected)}
            title="Delete Zone"
            disabled={!enabled}
        >
            <Icon />
        </Button>
    );
};