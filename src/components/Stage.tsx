import React from 'react'
import { Stage as KonvaStage, Layer } from 'react-konva';
import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import { useDownloadImage } from './DownloadImageProvider';
import { useZoom } from './ZoomProvider';
import useMeasure from 'react-use-measure';
import { Furnishings } from './Furnishings';


export const Stage = () => {
  const { scale, zoom } = useZoom();
  const [ position ] = React.useState<Vector2d>({ x:838, y:443});
  const { konvaRef } = useDownloadImage();
  const [ref, bounds] = useMeasure();
  const onWheel = (
    e: KonvaEventObject<WheelEvent, Node<NodeConfig>>
  ) => {
    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? -1 : 1;
    zoom(direction);
    e.evt.preventDefault();
  };

  return (
    <div style={{ width: '100%', height: '100%'}} ref={ref}>
    <KonvaStage
      width={bounds.width}
      height={bounds.height}
      scale={{ x: scale, y: scale }}
      onWheel={onWheel}
      position={position}
      draggable={true}
      ref={konvaRef}
    >
      <Layer>
        <Furnishings />
      </Layer>
    </KonvaStage>
    </div>
  )
}