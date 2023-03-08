import React from 'react';
import { Entity, World } from '@gaius/ecs';

const WorldContext = React.createContext<{
  world: World;
  entities: Entity[];
}>(null!);

export const WorldProvider = ({ children }: React.PropsWithChildren) => {
  const [tick, setTick] = React.useState(0);

  const world = React.useMemo(() => {
    return new World({
      onEntityCreated: () => setTick((t) => t + 1),
      onWorldDestroyed: () => setTick((t) => t + 1),
    });
  }, []);

  const context = React.useMemo(() => ({
    world,
    entities: world.entities,
  }), [world, tick]);

  return (
    <WorldContext.Provider value={context}>
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = () => React.useContext(WorldContext);
