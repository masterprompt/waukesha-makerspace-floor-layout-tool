import React from 'react';
import { Rect as KonvaRect } from 'react-konva';
import { IRect, ShapeRef } from '../types';
import { useSelectedTransform } from './SelectedTransformProvider';
import { ItemTransformer } from './ItemTransformer';
import { useItems } from './ItemsProvider';
interface Props {
    item: IRect;
}

export const Rect = ({
    item,
}: Props) => {
  const shapeRef = React.useRef(null);
  const { setSelected } = useSelectedTransform();
  const { updateItem: onChange } = useItems();
  return (
    <React.Fragment>
      <KonvaRect
        x={item.x}
        y={item.y}
        width={item.width}
        height={item.height}
        id={item.id}
        stroke={item.color}
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
      />
      <ItemTransformer
        transform={item}
        shapeReference={shapeRef}
        onChange={(transform) => onChange({...item, ...transform})}
      />
    </React.Fragment>
  );
};