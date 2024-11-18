import React from 'react';
import { Icon } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

interface Props extends React.PropsWithChildren {
    icon: Icon;
    onClick?: () => void;
}

export const ToolbarDropdownIconButton = ({
    children,
    icon: Icon,
    onClick = () => {}
}: Props) => {
    return (
        <Dropdown.Item onClick={() => onClick()}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px'}}>
                <Icon /> {children}
            </div>
        </Dropdown.Item>
    );
};