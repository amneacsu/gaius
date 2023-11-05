import { World } from '@gaius/ecs';

export const createWorld = () => {
  const world = new World();

  world.createEntity();

  return world;
};
