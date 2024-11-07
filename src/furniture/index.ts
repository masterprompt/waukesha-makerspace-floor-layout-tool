import { IImage } from "../types";

import floorPlanImage from './floor-plan.jpg';
import mainBench from './Main-Bench.png';
import heavyMetalShelf from './heavyMetalShelf.png';
import liquidsCabinet from './liquids-cabinet.png';
import blackToolBox from './black-tool-box.png';
import redToolBox from './red-tool-box.png';

const images: IImage[] = [
    {
        id: 'floorPlanImage',
        x: 0,
        y: 0,
        src: floorPlanImage,
        draggable: false,
        rotation: 90
      },
      {
        id: 'mainBench',
        x: 0,
        y: 0,
        src: mainBench,
        draggable: true,
        rotation: 0
      },
      {
        id: 'heavyMetalShelf1',
        x: 0,
        y: 0,
        src: heavyMetalShelf,
        draggable: true,
        rotation: 0
      },
      {
        id: 'heavyMetalShelf2',
        x: 0,
        y: 0,
        src: heavyMetalShelf,
        draggable: true,
        rotation: 0
      },
      {
        id: 'liquidsCabinet',
        x: 0,
        y: 0,
        src: liquidsCabinet,
        draggable: true,
        rotation: 0
      },
      {
        id: 'redToolBox',
        x: 0,
        y: 0,
        src: redToolBox,
        draggable: true,
        rotation: 0
      },
      {
        id: 'blackToolBox',
        x: 0,
        y: 0,
        src: blackToolBox,
        draggable: true,
        rotation: 0
      },
];

export default images;
