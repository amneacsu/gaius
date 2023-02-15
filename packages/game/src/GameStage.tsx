import React from 'react';
import styled from 'styled-components';
import { useStage, Stage } from '@gaius/core';
import { Background, Button } from '@gaius/ui';
import { useTicker } from './useTicker';
import { Debug } from './Debug';

const GameMenu = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #222;
  height: 42px;
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
