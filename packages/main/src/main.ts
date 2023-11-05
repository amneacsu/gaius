import { World } from '@gaius/ecs';

const world = new World();

setInterval(() => world.execute(), 1000);
