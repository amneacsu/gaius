import React from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, StageProvider, StageContext, WorldProvider } from '@gaius/core';
import { GameStage } from '@gaius/game';
import { MainMenuStage, PauseStage } from '@gaius/menu';

const Main = () => {
  return (
    <WorldProvider>
      <StageProvider>
        <StageContext.Consumer>
          {([stage]) => {
            switch (stage ) {
              case Stage.MainMenu: return <MainMenuStage />;
              case Stage.Game: return <GameStage />;
              case Stage.Pause: return <PauseStage />;
              default: throw new Error(`Unhandled stage ${stage}.`);
            }
          }}
        </StageContext.Consumer>
      </StageProvider>
    </WorldProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
