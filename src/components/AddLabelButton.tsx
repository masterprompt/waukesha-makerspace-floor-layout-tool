import { BookmarkPlus as Icon } from 'react-bootstrap-icons';
import { useItems } from "./ItemsProvider";
import { ToolbarDropdownIconButton } from "./ToolbarDropdownIconButton";
import { useItemService } from '../services/ItemService';
import { useModalStack } from '../features/modal-stack';
import { NewLabelModel } from './NewLabelModal';

export const AddLabelButton = () => {
    const { updateItem } = useItems();
    const { showModal } = useModalStack();
    const itemService = useItemService();
    const onClick = () => {
        showModal({
            component: NewLabelModel,
            onClose: (label?: string, color?: string) => {
                if (label && color){
                    updateItem(itemService.createLabel(label, color));
                }
            }
        })
    }
    return (
        <ToolbarDropdownIconButton icon={Icon} onClick={onClick}>
            New Label
        </ToolbarDropdownIconButton>
    );
};