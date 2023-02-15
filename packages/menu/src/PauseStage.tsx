import React from 'react';
import { useStage, useWorld, Stage } from '@gaius/core';
import { Background, Button, Menu } from '@gaius/ui';

export const PauseStage = () => {
  const [, setStage] = useStage();
  const { world } = useWorld();

  const quit = () => {
    setStage(Stage.MainMenu);
    world.destroy();
  };

  return (
    <React.Fragment>
      <Menu title="Pause">
        <Button onClick={() => setStage(Stage.Game)}>Resume</Button>
        <Button onClick={() => quit()}>Quit to menu</Button>
      </Menu>
      <Background id="pause" />
    </React.Fragment>
  );
};
