import React from 'react';
import { useStage, useWorld, Stage } from '@gaius/core';
import { Background, Button, Menu } from '@gaius/ui';

export const MainMenuStage = () => {
  const [, setStage] = useStage();
  const { world } = useWorld();

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
