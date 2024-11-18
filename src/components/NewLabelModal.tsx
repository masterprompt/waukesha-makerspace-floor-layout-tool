import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPortal } from 'react-dom';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { CirclePicker as ColorPicker } from 'react-color';
import InputGroup from 'react-bootstrap/InputGroup';

interface Props {
    onClose: (label?: string, color?: string) => void;
}

export const NewLabelModel = ({
    onClose = () => {},
}: Props) => {
    const [ label, setLabel ] = React.useState('');
    const [ color, setColor ] = React.useState('#3f51b5');
    return createPortal(
        <Modal show={true} onHide={() => onClose()}>
            <Modal.Header closeButton>
                <Modal.Title>New Label</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Label Text</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter Label Text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </InputGroup>
                <Form.Label>Label Color</Form.Label>
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
                onClick={() => onClose(label, color)}
                disabled={!Boolean(label && color)}
            >
                Create
            </Button>
            </Modal.Footer>
        </Modal>,
        document.body
    );
};