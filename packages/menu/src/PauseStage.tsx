import React from 'react';
import { useStage, useWorld, Stage } from '@gaius/core';
import { Button, Menu } from '@gaius/ui';

export const PauseStage = () => {
  const [, setStage] = useStage();
  const world = useWorld();

  return (
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
  );
};
