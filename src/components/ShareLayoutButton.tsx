import React from "react";
import { Button } from "react-bootstrap"
import { Share as Icon } from 'react-bootstrap-icons';
import { ShareLayoutModal } from "./ShareLayoutModal";

export const ShareLayoutButton = () => {
    const [ visible, setVisible] = React.useState(false);
    return (
        <>
            <Button
                title='Share Layout'
                onClick={() => setVisible(true)}
            >
                <Icon />
            </Button>
            <ShareLayoutModal visible={visible} onClose={() => setVisible(false)} />
        </>
    )
}