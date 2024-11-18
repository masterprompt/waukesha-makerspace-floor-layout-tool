import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { DownloadImageButton } from '../components/DownloadImageButton';
import { ZoomButton } from '../components/ZoomButton';
import { ShareLayoutButton } from '../components/ShareLayoutButton';
import { AddZoneButton } from '../components/AddZoneButton';
import { DeleteButton } from '../components/DeleteButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AddLabelButton } from '../components/AddLabelButton';

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
                
               
                
                <DropdownButton as={ButtonGroup} title="Add">
                    <AddZoneButton />
                    <AddLabelButton />
                </DropdownButton>
                <DeleteButton />
                <DropdownButton as={ButtonGroup} title="Share">
                    <DownloadImageButton />
                    <ShareLayoutButton />
                </DropdownButton>
            </ButtonGroup>
        </div>
    );
};
