"use strict";
(() => {
  // ../ecs/src/Entity.ts
  var Entity = class {
    constructor() {
      this.components = [];
    }
    addComponent(componentClass, properties) {
      const component = new componentClass(properties);
      component.properties = properties ?? componentClass.properties;
      this.components.push(component);
      return this;
    }
    removeComponent(componentClass) {
      const index = this.components.findIndex((component) => {
        return component instanceof componentClass;
      });
      this.components.splice(index, 1);
      return this;
    }
    has(componentClass) {
      return this.components.some((component) => {
        return component instanceof componentClass;
      });
    }
    hasAll(...componentClasses) {
      return componentClasses.every((componentClass) => {
        return this.components.some((component) => {
          return component instanceof componentClass;
        });
      });
    }
    getComponent(componentClass) {
      return this.components.find((component) => {
        return component instanceof componentClass;
      });
    }
    withComponent(componentClass, callback) {
      this.components.forEach((component) => {
        if (component instanceof componentClass)
          callback(component);
      });
    }
  };

  // ../ecs/src/Query.ts
  var Query = class {
    constructor(predicate) {
      this.entities = [];
      this.added = [];
      this.removed = [];
      this.predicate = predicate;
    }
  };

  // ../ecs/src/World.ts
  var World = class {
    constructor() {
      this.entities = [];
      this.queries = [];
      this.systems = [];
      this.entityIndex = 0;
    }
    createEntity() {
      const entity = new Entity();
      entity.id = this.entityIndex;
      this.entities.push(entity);
      this.entityIndex += 1;
      return entity;
    }
    removeEntity(entity) {
      this.entities.splice(this.entities.indexOf(entity), 1);
    }
    registerSystem(system) {
      this.systems.push(system);
      system.world = this;
      system.init();
      return this;
    }
    registerQuery(predicate) {
      const query = new Query(predicate);
      this.queries.push(query);
      return query;
    }
    execute() {
      this.queries.forEach((query) => {
        query.entities = this.entities.filter((entity) => {
          return query.predicate(entity);
        });
      });
      this.systems.forEach((system) => system.execute());
    }
    destroy() {
      this.entities = [];
    }
  };

  // src/index.ts
  var world = new World();
  var stage = 0 /* Map */;
  var SpriteSheet = class {
    constructor(src) {
      this.element = document.createElement("img");
      this.element.src = src;
    }
    save() {
      const cv = document.createElement("canvas");
      cv.width = this.element.width;
      cv.height = this.element.height;
      const ctx = cv.getContext("2d");
      ctx.drawImage(this.element, 0, 0);
      const imageData = ctx.getImageData(0, 0, cv.width, cv.height);
      window.electronAPI.setTitle(imageData);
    }
  };
  var cursor = new SpriteSheet("./assets/cursor.png");
  cursor.element.onload = () => cursor.save();
  var Canvas = class {
    constructor() {
      this.mouseX = 0;
      this.mouseY = 0;
      this.cursor = cursor;
      this.element = document.createElement("canvas");
      this.context = this.element.getContext("2d");
      new ResizeObserver(() => {
        this.element.width = document.body.clientWidth;
        this.element.height = document.body.clientHeight;
      }).observe(document.body);
      const handleMouseMove = (event) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      };
      this.element.addEventListener("mousemove", handleMouseMove);
    }
    fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.element.width, this.element.height);
    }
    render(s) {
      s.render(this);
      this.context.fillStyle = "red";
      this.context.fillRect(this.mouseX, this.mouseY, 4, 4);
      this.context.drawImage(this.cursor.element, this.mouseX, this.mouseY);
    }
  };
  var Stage = class {
  };
  var MapStage = class extends Stage {
    render(canvas2) {
      canvas2.fill("gray");
    }
  };
  var map = new MapStage();
  var root = document.getElementById("root");
  var canvas = new Canvas();
  root.appendChild(canvas.element);
  var tick = () => {
    switch (stage) {
      case 0 /* Map */:
        canvas.render(map);
        break;
    }
    world.execute();
    window.requestAnimationFrame(tick);
  };
  window.requestAnimationFrame(tick);
})();
//# sourceMappingURL=index.js.map
