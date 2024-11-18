import { FilePlus as Icon } from 'react-bootstrap-icons';
import { useItems } from "./ItemsProvider";
import { ToolbarDropdownIconButton } from "./ToolbarDropdownIconButton";
import { useItemService } from '../services/ItemService';
import { useModalStack } from '../features/modal-stack';
import { NewZoneModal } from './NewZoneModal';

export const AddZoneButton = () => {
    const { updateItem } = useItems();
    const itemService = useItemService();
    const { showModal } = useModalStack();
    const onClick = () => {
        showModal({
            component: NewZoneModal,
            onClose: (color?: string) => {
                if (color){
                    updateItem(itemService.createZone(color));
                }
            }
        })
    }
    return (
        <ToolbarDropdownIconButton icon={Icon} onClick={onClick}>
            New Zone
        </ToolbarDropdownIconButton>
    );
};