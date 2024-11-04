import { Image as KonvaImage, Transformer } from 'react-konva';
import useImage from 'use-image';
import { IImage } from '../types';
import React from 'react';
import { uniqueId } from 'lodash';
import floorPlanImage from '../assets/floor-plan.jpg';
import mainBench from '../assets/Main-Bench.png';

const defaultImages: IImage[] = [
  {
    id: uniqueId(),
    x: 0,
    y: 0,
    src: floorPlanImage,
    draggable: false,
  },
  {
    id: uniqueId(),
    x: 0,
    y: 0,
    src: mainBench,
    draggable: true,
    rotation: 90
  },
];

interface Props {
  image: IImage;
  onSelect: () => void;
  selected: boolean;
}

export const Image = ({
  image,
  onSelect = () => {},
  selected,
}: Props) => {
  const [img] = useImage(image.src);
  const shapeRef = React.useRef(null);
  const trRef = React.useRef(null);
  React.useEffect(() => {
    if (selected) {
      // we need to attach transformer manually
      trRef?.current?.nodes([shapeRef.current]);
      trRef?.current?.getLayer().batchDraw();
    }
  }, [selected]);
  return (
    <>
    <KonvaImage
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      rotation={image?.rotation || 0}
      draggable={image.draggable}
      onClick={() => image.draggable ? onSelect() : () => {}}
      onTap={() => image.draggable ? onSelect() : () => {}}
      ref={shapeRef}
      onDragEnd={(e) => {
        image.x = e.target.x();
        image.y = e.target.y();
      }}
    />
      {selected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          rotateEnabled={true}
          resizeEnabled={false} 
        />
      )}
    </>
  );
};

export const Images = () => {
  const [images] = React.useState<IImage[]>(defaultImages);
  const [ selected, setSelected ] = React.useState<IImage['id'] | null>(null);
  return (
    <>
      {images.map((image) => (
        <Image
          image={image}
          key={image.id}
          selected={selected === image.id}
          onSelect={() => setSelected(image.id)}
        />
      ))}
    </>
  )
}