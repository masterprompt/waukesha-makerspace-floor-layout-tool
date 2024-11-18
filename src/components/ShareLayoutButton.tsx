import React from "react";
import { Share as Icon } from 'react-bootstrap-icons';
import { ShareLayoutModal } from "./ShareLayoutModal";
import { ToolbarDropdownIconButton } from "./ToolbarDropdownIconButton";

export const ShareLayoutButton = () => {
    const [ visible, setVisible] = React.useState(false);
    return (
        <>
            <ToolbarDropdownIconButton
                icon={Icon}
                onClick={() => setVisible(true)}
            >
                Share Layout
            </ToolbarDropdownIconButton>
            <ShareLayoutModal visible={visible} onClose={() => setVisible(false)} />
        </>
    )
}