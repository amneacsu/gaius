import React from 'react';
import { useStage, useWorld, Stage } from '@gaius/core';
import { Button } from '@gaius/ui';

export const PauseStage = () => {
  const [, setStage] = useStage();
  const world = useWorld();

  return (
    <div>
      <h1>PauseStage</h1>
      <p>
        <Button
          onClick={() => {
            setStage(Stage.Game);
          }}
        >
          Resume
        </Button>
      </p>
      <p>
        <Button
          onClick={() => {
            setStage(Stage.MainMenu);
            world.destroy();
          }}>
          Quit to menu
        </Button>
      </p>
    </div>
  );
};
