import React from 'react';
import { Background, Button, Menu } from '@gaius/ui';
import { useStage, Stage } from '../StageContext';
import { useWorld } from '../WorldContext';

export const MainMenuStage = () => {
  const [, setStage] = useStage();
  const [world] = useWorld();

  const load = () => {
    world.loadDummyData();
    setStage(Stage.Game);
  };

  return (
    <Menu title="MainMenu">
      <Button onClick={() => setStage(Stage.Game)}>Play</Button>
      <Button onClick={() => load()}>Load dummy data</Button>
      <Background id="menu" />
    </Menu>
  );
};
