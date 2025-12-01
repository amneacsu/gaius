import { Query, System } from "../ecs";
import { MapCameraComponent } from "../components";

export class DebugSystem extends System {
  output: HTMLPreElement;

  mapViewQuery: Query;

  init() {
    this.output = document.querySelector("pre")!;

    this.mapViewQuery = this.world.registerQuery((entity) => {
      return entity.has(MapCameraComponent);
    });
  }

  execute() {
    let text = `Arrow keys to pan\n1024x1024 grid\n`;

    this.mapViewQuery.entities.forEach((entity, index) => {
      entity.withComponent(MapCameraComponent, (mapCamera) => {
        text += `Camera ${index + 1}: ${mapCamera.originX.toString().padStart(4, " ")},${mapCamera.originY.toString().padStart(4, " ")}\n`;
      });
    });

    this.output.innerHTML = text;
  }
}
