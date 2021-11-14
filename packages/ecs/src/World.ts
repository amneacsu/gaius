import { Entity } from './Entity';
import { Query, QueryPredicate } from './Query';
import { System } from './System';

export class World {
  entities: Entity[] = [];
  queries: Query[] = [];
  systems: System[] = [];
  entityIndex = 0;

  createEntity() {
    const entity = new Entity();
    entity.id = this.entityIndex;
    this.entities.push(entity);
    this.entityIndex += 1;
    return entity;
  }

  removeEntity(entity: Entity) {
    this.entities.splice(this.entities.indexOf(entity), 1);
  }

  registerSystem(system: System) {
    this.systems.push(system);
    system.world = this;
    system.init();
    return this;
  }

  registerQuery(predicate: QueryPredicate) {
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
