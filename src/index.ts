import { World } from './ecs';
import './style.css';
import { RendererSystem } from './systems/RendererSystem';
import { MapSystem } from './systems/MapSystem';
import { KeyboardSystem } from './systems/KeyboardSystem';
import { DebugSystem } from './systems/DebugSystem';

const world = new World();

world
  .registerSystem(new RendererSystem)
  .registerSystem(new MapSystem)
  .registerSystem(new KeyboardSystem)
  .registerSystem(new DebugSystem);

setInterval(() => {
  world.execute();
}, 1000 / 60);

console.log('Hello from rspack!');
