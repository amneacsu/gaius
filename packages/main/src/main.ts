import { createWorld } from '@gaius/world';

const world = createWorld();

setInterval(() => world.execute(), 1000);
