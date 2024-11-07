import React from 'react'
import { Stage as KonvaStage, Layer } from 'react-konva';
import { Images } from './Image';
import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import { useDownloadImage } from './DownloadImageProvider';
import { useZoom } from './ZoomProvider';
import useMeasure from 'react-use-measure';


export const Stage = () => {
  const { scale, zoom } = useZoom();
  const [ position ] = React.useState<Vector2d>({ x:838, y:443});
  const { konvaRef } = useDownloadImage();
  const onWheel = (
    e: KonvaEventObject<WheelEvent, Node<NodeConfig>>
  ) => {
    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? -1 : 1;
    zoom(direction);
    e.evt.preventDefault();
  };

  return (
    <div style={{ width: '100%'}}>
    <KonvaStage
      width={window.innerWidth}
      height={window.innerHeight}
      scale={{ x: scale, y: scale }}
      onWheel={onWheel}
      position={position}
      draggable={true}
      ref={konvaRef}
    >
      <Layer>
        <Images />
      </Layer>
    </KonvaStage>
    </div>
  )
}