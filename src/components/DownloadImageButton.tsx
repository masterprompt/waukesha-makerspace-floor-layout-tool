import { useDownloadImage } from "./DownloadImageProvider"
import { Download as Icon } from 'react-bootstrap-icons';
import { ToolbarDropdownIconButton } from "./ToolbarDropdownIconButton";

export const DownloadImageButton = () => {
    const { downloadImage } = useDownloadImage();
    return (
        <ToolbarDropdownIconButton
            onClick={() => downloadImage()}
            icon={Icon}
        >
            Download Image
        </ToolbarDropdownIconButton>
    )
}