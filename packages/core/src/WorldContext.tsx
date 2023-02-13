import React from 'react';
import { ActorDetails } from '@gaius/components';
import { World } from '@gaius/ecs';

const WorldContext = React.createContext<World>(null!);

export const WorldProvider = ({ children }: React.PropsWithChildren) => {
  const world = React.useMemo(() => {
    const w = new World();

    w.createEntity().addComponent(ActorDetails);

    return w;
  }, []);

  return (
    <WorldContext.Provider value={world}>
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = () => React.useContext(WorldContext);
