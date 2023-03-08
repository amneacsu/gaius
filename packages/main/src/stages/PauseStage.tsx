import React from 'react';
import { Background, Button, Menu } from '@gaius/ui';
import { useStage, Stage } from '../StageContext';
import { useWorld } from '../WorldContext';

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
