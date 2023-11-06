import {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
} from 'react';
import { World } from '@gaius/ecs';
import { createWorld } from '@gaius/world';

export const WorldContext = createContext<[World | null]>([null]);
export const useWorld = () => {
  const [world] = useContext(WorldContext);
  if (world === null) throw new Error('No world context.');
  return world;
};

const world = createWorld();

export const WorldProvider = (props: PropsWithChildren) => {
  // Set a simple counter. This will only be used to trigger re-renders.
  const [, tick] = useState(0);

  const context = useMemo(() => {
    // Proxy through every world object property to tick the render counter
    // every time a world method is called.
    return new Proxy(world, {
      get(target, prop: keyof World | 'constructor') {
        const next = target[prop];

        // Unsure what is on a 1 second timer that keeps accessing this.
        // Perhaps some browser extension.
        if (prop === 'constructor') return next;

        if (typeof next === 'function') {
          tick((p) => p + 1);
        }

        return next;
      },
    });
  }, []);

  return (
    // The context's value needs to be unstable to ensure children always
    // re-render on a tick.
    <WorldContext.Provider value={[context]}>
      {props.children}
    </WorldContext.Provider>
  );
};
