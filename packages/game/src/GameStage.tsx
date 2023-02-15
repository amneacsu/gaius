import React from 'react';
import styled from 'styled-components';
import { useStage, Stage } from '@gaius/core';
import { Background, Button, Panel } from '@gaius/ui';
import { useTicker } from './useTicker';
import { Debug } from './Debug';

const GameMenu = styled(Panel)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const GameStage = () => {
  const [, setStage] = useStage();
  useTicker();

  return (
    <React.Fragment>
      <GameMenu>
        <Button onClick={() => setStage(Stage.Pause)}>Pause</Button>
      </GameMenu>
      <Debug />
      <Background id="game" />
    </React.Fragment>
  );
};
