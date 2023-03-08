import React from 'react';
import { World } from '@gaius/ecs';

const WorldContext = React.createContext<readonly [World, number]>(null!);

export const WorldProvider = ({ children }: React.PropsWithChildren) => {
  const [tick, setTick] = React.useState(0);

  const world = React.useMemo(() => {
    return new World({
      onEntityCreated: () => setTick((t) => t + 1),
      onExecute: () => setTick((t) => t + 1),
      onWorldDestroyed: () => setTick((t) => t + 1),
    });
  }, []);

  const context = React.useMemo(() => [world, tick] as const, [world, tick]);

  return (
    <WorldContext.Provider value={context}>
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = () => React.useContext(WorldContext);
