import React from 'react';
import { useStage, Stage } from '@gaius/core';
import { DebugStage } from '@gaius/game';
import { MainMenuStage, PauseStage } from '@gaius/menu';

export const StageView = () => {
  const [stage] = useStage();

  switch (stage ) {
    case Stage.MainMenu: return <MainMenuStage />;
    case Stage.Debug: return <DebugStage />;
    case Stage.Pause: return <PauseStage />;
    default: throw new Error(`Unhandled stage ${stage}.`);
  }
};
