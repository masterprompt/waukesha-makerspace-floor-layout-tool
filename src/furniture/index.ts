import { IFurnishing, ItemSort, ItemType } from "../types";

import mainBench from './Main-Bench.png';
import heavyMetalShelf from './heavyMetalShelf.png';
import liquidsCabinet from './liquids-cabinet.png';
import blackToolBox from './black-tool-box.png';
import redToolBox from './red-tool-box.png';
import cncRouter from './cnc-router.png';
import flatStockRack from './flat-stock-rack.png';
import laserEngraver from './laser-engraver.png';
import lockers from './lockers.png';
import modularShelvesNarrow from './modular-shelves-narrow.png';
import modularShelvesWide from './modular-shelves-wide.png';
import palletRacks from './pallet-racks.png';
import wireRackShelves from './wire-rack-shelves.png';

function randInt(min: number, max: number) {
  const range = max-min;
  return min + Math.floor(Math.random() * range);
}

const furniture: {[key: string]: string} = {
  mainBench,
  heavyMetalShelf1:heavyMetalShelf,
  heavyMetalShelf2:heavyMetalShelf,
  liquidsCabinet,
  blackToolBox,
  redToolBox,
  cncRouter,
  flatStockRack,
  laserEngraver,
  lockers1: lockers,
  lockers2: lockers,
  lockers3: lockers,
  modularShelvesNarrow1: modularShelvesNarrow,
  modularShelvesNarrow2: modularShelvesNarrow,
  modularShelvesWide,
  palletRacks,
  wireRackShelves1: wireRackShelves,
  wireRackShelves2: wireRackShelves,
};

const images: IFurnishing[] = [
      ...Object.keys(furniture).map(k => ({
        id: k,
        x: randInt(-602, 1354),
        y: randInt(-594, 516),
        src: furniture[k],
        draggable: true,
        rotation: 0,
        type: ItemType.IMAGE,
        sort: ItemSort.FURNITURE
      }))
];

export default images;
