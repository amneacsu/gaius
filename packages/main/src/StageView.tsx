import React from 'react';

import { useStage, Stage } from './StageContext';
import { PauseStage } from './stages/PauseStage';
import { GameStage } from './stages/GameStage';
import { MainMenuStage } from './stages/MainMenuStage';
import { MapStage } from './stages/MapStage';

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
