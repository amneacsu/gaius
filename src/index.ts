import { World } from './ecs';

const world = new World();

setInterval(() => {
  world.execute();
}, 1000 / 60);
