import React from 'react';
import { ILabel, ShapeRef } from '../types';
import { useSelectedTransform } from './SelectedTransformProvider';
import { ItemTransformer } from './ItemTransformer';
import { useItems } from './ItemsProvider';
import { Label as KonvaLabel, Tag, Text } from 'react-konva';

interface Props {
    item: ILabel;
}

export const Label = ({
    item
}: Props) => {
    const shapeRef = React.useRef(null);
    const { setSelected } = useSelectedTransform();
    const { updateItem: onChange } = useItems();
    return (
        <React.Fragment>
            <KonvaLabel
                x={item.x}
                y={item.y}
                width={item.width}
                height={item.height}
                id={item.id}
                stroke='red'
                strokeWidth={5}

                onClick={() => setSelected(item)}
                onTap={() => setSelected(item)}
                ref={shapeRef}

                draggable={item.draggable ? true : false}
                onDragStart={() => setSelected(item)}
                onDragEnd={(e) => {
                onChange({
                    ...item,
                    x: e.target.x(),
                    y: e.target.y(),
                });
                }}
                onTransformEnd={(e) => {
                // transformer is changing scale of the node
                // and NOT its width or height
                // but in the store we have only width and height
                // to match the data better we will reset scale on transform end
                const node = shapeRef.current as unknown as ShapeRef;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                // we will reset it back
                node.scaleX(1);
                node.scaleY(1);
                onChange({
                    ...item,
                    x: node.x(),
                    y: node.y(),
                    // set minimal value
                    width: Math.max(5, node.width() * scaleX),
                    height: Math.max(node.height() * scaleY),
                });
                }}
            >
                <Tag 
                    fill={item.color || 'yellow'}
                    stroke='black' 
                    pointerDirection="down" 
                    pointerWidth={20} 
                    pointerHeight={20}
                />
                <Text 
                    text={item.label}
                    fontStyle='bold'
                    fontSize={22} 
                    padding={14} 
                    fill="white"
                />
            </KonvaLabel>
            <ItemTransformer
                transform={item}
                shapeReference={shapeRef}
                onChange={(transform) => onChange({...item, ...transform})}
            />
        </React.Fragment>
    );
};
