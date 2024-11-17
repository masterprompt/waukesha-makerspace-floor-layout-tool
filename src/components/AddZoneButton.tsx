import { Button } from "react-bootstrap"
import { Plus as Icon } from 'react-bootstrap-icons';
import { useZones } from "./ZonesProvider";

export const AddZoneButton = () => {
    const { addZone } = useZones();
    return (
        <Button
            onClick={() => addZone()}
            title="Add Zone"
        >
            <Icon />
        </Button>
    );
};