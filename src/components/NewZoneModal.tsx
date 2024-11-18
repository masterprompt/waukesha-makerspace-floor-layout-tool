import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPortal } from 'react-dom';
import Form from 'react-bootstrap/Form';
import { CirclePicker as ColorPicker } from 'react-color';
import { useColor } from './ColorProvider';

interface Props {
    onClose: (color?: string) => void;
}

export const NewZoneModal = ({
    onClose = () => {},
}: Props) => {
    const [ color, setColor ] = useColor();
    return createPortal(
        <Modal show={true} onHide={() => onClose()}>
            <Modal.Header closeButton>
                <Modal.Title>New Zone</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Zone Color</Form.Label>
                <ColorPicker
                    color={color}
                    onChange={e => setColor(e.hex)}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => onClose()}>
                Cancel
            </Button>
            <Button
                variant="primary"
                onClick={() => onClose(color)}
                disabled={!Boolean(color)}
            >
                Create
            </Button>
            </Modal.Footer>
        </Modal>,
        document.body
    );
};