import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Copy } from 'react-bootstrap-icons';
import { useFurniture } from './FurnitureProvider';
import { useLayoutService } from '../hooks/useLayoutService';
import { toast } from 'react-toastify';

interface Props {
    visible?: boolean;
    onClose?: () => void;
}

export const ShareLayoutModal = ({
    visible,
    onClose = () => {}
}: Props) => {
    const { layout } = useFurniture();
    const layoutService = useLayoutService();
    const url = layoutService.getLayoutUrl(layout);
    const onCopy = async () => {
        await navigator.clipboard.writeText(url);
        toast('Copied to clipboard!');
    }
    return !visible ? null : (
        <Modal show={visible} onHide={() => onClose()}>
            <Modal.Header closeButton>
            <Modal.Title>Share Layout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Copy the layout url and share it with friends!
                <InputGroup className="mb-3">
                    <Form.Control
                        defaultValue={url}
                        readOnly={true}
                    />
                    <Button
                        variant="secondary"
                        title='Copy To Clipboard'
                        onClick={() => onCopy()}
                    >
                        <Copy />
                    </Button>
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => onClose()}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}