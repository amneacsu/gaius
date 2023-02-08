import { World } from './ecs';
import './Game';

const world = new World();

setInterval(() => {
  world.execute();
}, 1000 / 60);
