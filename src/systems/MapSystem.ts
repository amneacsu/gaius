import { System, Query } from '../ecs';

import { Sprite } from '../core/Sprite';
import {
  MapCameraComponent,
  MapDataComponent,
  FrameComponent,
} from '../components';

const spriteSize = 64;
const halfSprite = spriteSize * .5;
const quarterSprite = spriteSize * .25;

export class MapSystem extends System {
  mapsQuery: Query;

  init() {
    this.mapsQuery = new Query((entity) => entity.has(MapDataComponent) && entity.has(FrameComponent));
    this.world.registerQuery(this.mapsQuery);

    this.world.createEntity()
      .addComponent(new FrameComponent({
        x: 0,
        y: 0,
        w: 600,
        h: 576,
      }))
      .addComponent(new MapDataComponent({
        width: 16,
        height: 16,
        random: true,
      }))
      .addComponent(new MapCameraComponent({
        originX: 8,
        originY: 8,
      }));
  }

  execute() {
    this.mapsQuery.entities.forEach((entity) => {
      const mapCamera = entity.getComponent(MapCameraComponent)!;
      const { originX, originY } = mapCamera;

      const frame = entity.getComponent(FrameComponent)!;
      const halfFrameWidth = frame.w / 2;
      const halfFrameHeight = frame.h / 2;

      const surface = frame.surface;
      surface.clear();

      const { mapData } = entity.getComponent(MapDataComponent)!;
      mapData.forEach((value) => {
        const x = value.x - originX;
        const y = value.y - originY;
        const newX = (x - y) * halfSprite + halfFrameWidth;
        const newY = (x + y) * quarterSprite + halfFrameHeight;

        if (newX < -spriteSize || newX > (spriteSize + frame.w)) return;
        if (newY < -spriteSize || newY > (spriteSize + frame.h)) return;

        const sprite = new Sprite('map1', value.type);
        surface.drawSpriteData(sprite.data, newX, newY);
      });
    });
  }
}
