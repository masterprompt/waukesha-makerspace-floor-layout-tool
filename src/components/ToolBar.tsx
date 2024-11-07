import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { DownloadImageButton } from './DownloadImageButton';
import { ZoomButton } from './ZoomButton';
import { ShareLayoutButton } from './ShareLayoutButton';

export const ToolBar = () => {
    return (
        <div
            style={{
                position: 'absolute',
                zIndex: 9999999,
                left: '50%',
                top: '20px',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <ButtonGroup size="sm">
                <ZoomButton direction={-1} />
                <ZoomButton direction={1} />
                <DownloadImageButton />
                <ShareLayoutButton />
            </ButtonGroup>
        </div>
    );
};
