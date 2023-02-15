import React from 'react';
import { useStage, Stage } from '@gaius/core';
import { Button, Menu } from '@gaius/ui';

export const MainMenuStage = () => {
  const [, setStage] = useStage();

  return (
    <Menu title="MainMenu">
      <Button onClick={() => setStage(Stage.Game)}>Play</Button>
    </Menu>
  );
};
