import { Button } from "react-bootstrap"
import { FilePlus as Icon } from 'react-bootstrap-icons';
import { useItems } from "./ItemsProvider";
import { useZoneService } from "../hooks/useZoneService";

export const AddZoneButton = () => {
    const { updateItem } = useItems();
    const zoneService = useZoneService();
    const onClick = () => {
        updateItem(zoneService.createZone('Zone'))
    }
    return (
        <Button
            onClick={() => onClick()}
            title="Add Zone"
        >
            <Icon />
        </Button>
    );
};