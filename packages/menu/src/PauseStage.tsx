import React from 'react';
import { useStage, useWorld, Stage } from '@gaius/core';
import { Background, Button, Menu } from '@gaius/ui';

export const PauseStage = () => {
  const [, setStage] = useStage();
  const world = useWorld();

  return (
    <React.Fragment>
      <Menu title="Pause">
        <Button
          onClick={() => {
            setStage(Stage.Game);
          }}
        >
          Resume
        </Button>
        <Button
          onClick={() => {
            setStage(Stage.MainMenu);
            world.destroy();
          }}>
          Quit to menu
        </Button>
      </Menu>
      <Background id="pause" />
    </React.Fragment>
  );
};
