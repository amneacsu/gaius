import React from 'react';
import { useStage, Stage, useWorld } from '@gaius/core';
import { Button } from '@gaius/ui';
import { useTicker } from './useTicker';
import { Debug } from './Debug';

export const GameStage = () => {
  const [, setStage] = useStage();
  useTicker();
  const world = useWorld();

  return (
    <div>
      <h1>MainStage</h1>
      <p>
        Entity count: {world.entities.length}
      </p>
      <p>
        <Button onClick={() => world.createEntity()}>Create entity</Button>
      </p>
      <p>
        <Button onClick={() => setStage(Stage.Pause)}>Pause</Button>
      </p>
      <Debug />
    </div>
  );
};
