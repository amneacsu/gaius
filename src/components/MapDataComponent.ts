import { Component } from '../ecs';
import { Rng } from '../core/Rng';

const generateMapData = (width: number, height: number) => {
  const rng = new Rng();
  const data = [];
  for (let index = 0; index < width * height; index += 1) {
    const x = index % width;
    const y = ~~(index / width);
    data.push({
      x,
      y,
      type: rng.sample([0, 2]),
    });
  }

  return data;
};

type MapDataComponentData = {
  mapData?: {
    x: number;
    y: number;
    type: number;
  }[];
  height: number;
  width: number;
  random?: boolean;
};

export class MapDataComponent extends Component {
  mapData: {
    x: number;
    y: number;
    type: number;
  }[];
  height: number;
  width: number;

  constructor(data: MapDataComponentData) {
    super();
    const {
      width = 16,
      height = 16,
      mapData = [],
      random = false,
    } = data;

    this.height = height;
    this.width = width;

    this.mapData = random
      ? generateMapData(width, height)
      : mapData;
  }
}
