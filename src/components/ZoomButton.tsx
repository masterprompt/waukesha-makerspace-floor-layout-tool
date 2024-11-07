import { Button } from "react-bootstrap"
import { ZoomIn, ZoomOut } from 'react-bootstrap-icons';
import { useZoom } from "./ZoomProvider";

interface Props {
    direction: number;
}

export const ZoomButton = ({ direction }: Props) => {
    const { zoom } = useZoom();
    const label = `Zoom ${direction > 0 ? 'in' : 'out'}`;
    const Icon = direction > 0 ? ZoomIn : ZoomOut
    return (
        <Button
            onClick={() => zoom(direction, true)}
            title={label}
        >
            <Icon />
        </Button>
    )
}