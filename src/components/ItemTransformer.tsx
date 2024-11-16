import { Transformer } from 'react-konva';
import { TransformRef, ShapeRef, ITransform } from '../types';
import React from 'react';
import { useSelectedTransform } from './SelectedTransformProvider';
import { useRotationSnaps } from '../hooks/useRotationSnaps';

interface Props {
    transform: ITransform;
    shapeReference: React.MutableRefObject<null>;
    onChange?: (item: ITransform) => void;
}

export const ItemTransformer = ({
    transform,
    shapeReference,
    onChange = () => {},
}: Props) => {
    const trRef = React.useRef(null);
    const rotationSnaps = useRotationSnaps(22.5);
    const { selected } = useSelectedTransform();
    const isSelected = selected?.id === transform?.id;
    React.useEffect(() => {
        if (isSelected) {
            const transformRef = trRef.current as unknown as TransformRef;
            // we need to attach transformer manually
            transformRef.nodes([shapeReference.current]);
            transformRef.getLayer().batchDraw();
        }
    }, [isSelected]);
    return !isSelected ? null : (
        <Transformer
            ref={trRef}
            flipEnabled={false}
            rotateEnabled={transform.draggable || transform.scalable || false}
            resizeEnabled={transform.scalable ? true : false}
            rotationSnaps={rotationSnaps}
            rotationSnapTolerance={20}
            onTransformEnd={() => {
              const node = shapeReference.current as unknown as ShapeRef;
              const newRotation = node.rotation();
              transform.rotation = newRotation;
              onChange({...transform});
            }}

            boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
                    return oldBox;
                }
                return newBox;
            }}
        />
    );
};