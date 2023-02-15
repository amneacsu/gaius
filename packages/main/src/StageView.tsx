import React from 'react';
import { useStage, Stage } from '@gaius/core';
import { GameStage } from '@gaius/game';
import { MainMenuStage, PauseStage } from '@gaius/menu';

export const StageView = () => {
  const [stage] = useStage();

  switch (stage ) {
    case Stage.MainMenu: return <MainMenuStage />;
    case Stage.Pause: return <PauseStage />;
    case Stage.Game: return <GameStage />;
    default: throw new Error(`Unhandled stage ${stage}.`);
  }
};
