import { FilePlus as Icon } from 'react-bootstrap-icons';
import { useItems } from "./ItemsProvider";
import { ToolbarDropdownIconButton } from "./ToolbarDropdownIconButton";
import { useItemService } from '../services/ItemService';

export const AddZoneButton = () => {
    const { updateItem } = useItems();
    const itemService = useItemService();
    const onClick = () => {
        updateItem(itemService.createZone())
    }
    return (
        <ToolbarDropdownIconButton icon={Icon} onClick={onClick}>
            New Zone
        </ToolbarDropdownIconButton>
    );
};