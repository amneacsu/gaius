import React from 'react';
import { useStage, Stage } from '@gaius/core';
import { Background, Button, Menu } from '@gaius/ui';

export const MainMenuStage = () => {
  const [, setStage] = useStage();

  return (
    <Menu title="MainMenu">
      <Button onClick={() => setStage(Stage.Game)}>Play</Button>
      <Background id="menu" />
    </Menu>
  );
};
