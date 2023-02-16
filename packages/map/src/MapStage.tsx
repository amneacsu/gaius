import React from 'react';
import styled from 'styled-components';
import { useStage, Stage } from '@gaius/core';
import { Button, Panel } from '@gaius/ui';

const GameMenu = styled(Panel)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const MapStage = () => {
  const [, setStage] = useStage();

  return (
    <React.Fragment>
      <GameMenu>
        <Button onClick={() => setStage(Stage.Pause)}>Pause</Button>
      </GameMenu>
    </React.Fragment>
  );
};
