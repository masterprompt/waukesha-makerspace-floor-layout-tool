import React from 'react'
import { Stage as KonvaStage, Layer, Rect } from 'react-konva';
import { Images } from './Image';
import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';

const scaleBy = 1.01;

export const Stage = () => {
  const [ scale, setScale ] = React.useState(0.5);
  const [ position ] = React.useState<Vector2d>({ x:700, y:1000});
  const onWheel = (
    e: KonvaEventObject<WheelEvent, Node<NodeConfig>>
  ) => {
    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? -1 : 1;
    setScale(scale =>  direction > 0 ? scale * scaleBy : scale / scaleBy);
  };

  return (
    <KonvaStage
      width={window.innerWidth}
      height={window.innerHeight}
      scale={{ x: scale, y: scale }}
      onWheel={onWheel}
      position={position}
      draggable={true}
    >
      <Layer>
        <Images />
      </Layer>
    </KonvaStage>
  )
}