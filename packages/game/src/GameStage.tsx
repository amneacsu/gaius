import React from 'react';
import { useStage, Stage, useWorld } from '@gaius/core';
import { Background, Button, Menu } from '@gaius/ui';
import { useTicker } from './useTicker';
import { Debug } from './Debug';

export const GameStage = () => {
  const [, setStage] = useStage();
  useTicker();
  const world = useWorld();

  return (
    <React.Fragment>
      <Menu title="Game">
        <Button onClick={() => world.createEntity()}>Create entity</Button>
        <Button onClick={() => setStage(Stage.Pause)}>Pause</Button>
      </Menu>
      <Debug />
      <Background id="game" />
    </React.Fragment>
  );
};
