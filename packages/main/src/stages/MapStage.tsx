import React from 'react';
import styled from 'styled-components';
import { Button, Panel } from '@gaius/ui';
import { useStage, Stage } from '../StageContext';

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
