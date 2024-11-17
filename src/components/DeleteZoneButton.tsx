import { Button } from "react-bootstrap"
import { Trash as Icon } from 'react-bootstrap-icons';
import { useZones } from "./ZonesProvider";
import { useSelectedTransform } from "./SelectedTransformProvider";
import { ItemType } from "../types";

export const DeleteZoneButton = () => {
    const { deleteZone } = useZones();
    const { selected } = useSelectedTransform();
    const enabled = selected?.type === ItemType.RECT;
    return (
        <Button
            onClick={() => deleteZone(selected)}
            title="Delete Zone"
            disabled={!enabled}
        >
            <Icon />
        </Button>
    );
};