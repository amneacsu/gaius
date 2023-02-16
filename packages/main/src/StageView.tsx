import React from 'react';
import { useStage, Stage } from '@gaius/core';
import { GameStage } from '@gaius/game';
import { MapStage } from '@gaius/map';
import { MainMenuStage, PauseStage } from '@gaius/menu';

export const StageView = () => {
  const [stage] = useStage();

  switch (stage ) {
    case Stage.MainMenu: return <MainMenuStage />;
    case Stage.Pause: return <PauseStage />;
    case Stage.Game: return <GameStage />;
    case Stage.Map: return <MapStage />;
    default: throw new Error(`Unhandled stage ${stage}.`);
  }
};
