import React from 'react';

import { useWorld } from '../../WorldContext';
import { useStage, Stage } from '../../StageContext';
import { useTicker } from './useTicker';

export const MainStage = () => {
  const [, setStage] = useStage();
  useTicker();
  const world = useWorld();

  return (
    <div>
      <h1>MainStage</h1>
      <p>
        Entity count: {world.entities.length}
      </p>
      <p>
        <button onClick={() => world.createEntity()}>Create entity</button>
      </p>
      <p>
        <button onClick={() => setStage(Stage.PauseStage)}>Pause</button>
      </p>
    </div>
  );
};
