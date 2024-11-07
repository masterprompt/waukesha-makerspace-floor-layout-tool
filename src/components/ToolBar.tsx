import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { DownloadImageButton } from './DownloadImageButton';
import { ZoomButton } from './ZoomButton';
import { ShareLayoutButton } from './ShareLayoutButton';

export const ToolBar = () => {
    return (
        <ButtonGroup size="sm">
            <ZoomButton direction={-1} />
            <ZoomButton direction={1} />
            <DownloadImageButton />
            <ShareLayoutButton />
        </ButtonGroup>
    );
};
