import { Component } from '@gaius/ecs';
import { Button } from '@gaius/ui';

import { useWorld } from '../core/index.ts';
import './style.css';

class DummyComponent extends Component {
  foo?: string;

  constructor(foo?: string) {
    super();
    this.foo = foo;
  }
}

export const DebugScreen = () => {
  const world = useWorld();

  return (
    <div className="DebugScreen">
      <Button
        type="button"
        onClick={() => {
          const entity = world.createEntity();
          entity.addComponent(new DummyComponent());
        }}>
        Create entity
      </Button>

      <h3>Entities</h3>
      <ul>
        {world.entities.map((entity) => {
          return (
            <li key={entity.id}>
              Entity {entity.id}, cps: {entity.components.length}<br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
