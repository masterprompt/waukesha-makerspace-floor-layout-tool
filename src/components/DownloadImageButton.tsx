import { Button } from "react-bootstrap"
import { useDownloadImage } from "./DownloadImageProvider"
import { Download as Icon } from 'react-bootstrap-icons';

export const DownloadImageButton = () => {
    const { downloadImage } = useDownloadImage();
    return (
        <Button
            onClick={() => downloadImage()}
            title="Download Image"
        >
            <Icon />
        </Button>
    )
}