import React from 'react';
import { World } from '@gaius/ecs';

const WorldContext = React.createContext<World>(null!);

export const WorldProvider = ({ children }: React.PropsWithChildren) => {
  const world = React.useMemo(() => {
    return new World();
  }, []);

  return (
    <WorldContext.Provider value={world}>
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = () => React.useContext(WorldContext);
