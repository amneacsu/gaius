import React from 'react';
import { useStage, Stage } from '@gaius/core';
import { Button } from '@gaius/ui';

export const MainMenuStage = () => {
  const [, setStage] = useStage();

  return (
    <div>
      <h1>MainMenuStage</h1>
      <Button onClick={() => setStage(Stage.Game)}>Play</Button>
    </div>
  );
};
