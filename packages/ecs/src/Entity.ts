import { Component } from './Component';

interface ComponentClass<T = unknown> extends Component {
  new (...args: any[]): T;
};

export class Entity {
  id: number;
  components: Component[] = [];

  addComponent(component: Component) {
    this.components.push(component);

    return this;
  }

  removeComponent<T extends Component>(componentClass: ComponentClass<T>) {
    const index = this.components.findIndex((component) => {
      return component instanceof componentClass;
    });

    this.components.splice(index, 1);

    return this;
  }

  has<T extends Component>(componentClass: ComponentClass<T>) {
    return this.components.some((component) => {
      return component instanceof componentClass;
    });
  }

  hasAll<T extends Component>(...componentClasses: ComponentClass<T>[]) {
    return componentClasses.every((componentClass) => {
      return this.components.some((component) => {
        return component instanceof componentClass;
      });
    });
  }

  getComponent<T extends Component>(componentClass: ComponentClass<T>): T | undefined {
    return this.components.find((component): component is T => {
      return component instanceof componentClass;
    });
  }

  withComponent<T extends Component>(componentClass: ComponentClass<T>, callback: (component: T) => void) {
    this.components.forEach((component) => {
      if (component instanceof componentClass) callback(component);
    });
  }
}
