import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import { IFurnishing, IImage } from '../types';
import React from 'react';
import { useSelectedTransform } from './SelectedTransformProvider';
import { ItemTransformer } from './ItemTransformer';
import { useItems } from './ItemsProvider';

interface Props {
  item: IImage;
  onChange?: (item: IFurnishing) => void;
}

export const Image = ({
  item,
}: Props) => {
  const [img] = useImage(item.src);
  const shapeRef = React.useRef(null);
  const { setSelected } = useSelectedTransform();
  const { onChange } = useItems();
  return (
    <>
    <KonvaImage
      image={img}
      x={item.x}
      y={item.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      rotation={item?.rotation || 0}
      draggable={item.draggable ? true : false}
      onClick={() => setSelected(item)}
      onTap={() => setSelected(item)}
      ref={shapeRef}
      onDragStart={() => {
        setSelected(item);
      }}
      onDragEnd={(e) => {
        item.x = e.target.x();
        item.y = e.target.y();
        onChange({...item});
      }}
    />
      <ItemTransformer
        transform={item}
        shapeReference={shapeRef}
        onChange={(transform) => onChange({...item, ...transform})}
      />
    </>
  );
};