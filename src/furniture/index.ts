import { IImage } from "../types";

import floorPlanImage from '../assets/floor-plan.jpg';
import mainBench from '../assets/Main-Bench.png';

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
        rotation: 90
      },
];

export default images;
