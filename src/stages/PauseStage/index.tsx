import React from 'react';

import { useStage, Stage } from '../../StageContext';
import { useWorld } from '../../WorldContext';

export const PauseStage = () => {
  const [, setStage] = useStage();
  const world = useWorld();

  return (
    <div>
      <h1>PauseStage</h1>
      <p>
        <button
          onClick={() => {
            setStage(Stage.MainStage);
          }}
        >
          Resume
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            setStage(Stage.MenuStage);
            world.destroy();
          }}>
          Quit to menu
        </button>
      </p>
    </div>
  );
};
