import React from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, StageProvider, StageContext, WorldProvider } from '@gaius/core';
import { DebugStage } from '@gaius/game';
import { MainMenuStage, PauseStage } from '@gaius/menu';

import { ErrorBoundary } from './ErrorBoundary';

const Main = () => {
  return (
    <ErrorBoundary>
      <WorldProvider>
        <StageProvider>
          <StageContext.Consumer>
            {([stage]) => {
              switch (stage ) {
                case Stage.MainMenu: return <MainMenuStage />;
                case Stage.Debug: return <DebugStage />;
                case Stage.Pause: return <PauseStage />;
                default: throw new Error(`Unhandled stage ${stage}.`);
              }
            }}
          </StageContext.Consumer>
        </StageProvider>
      </WorldProvider>
    </ErrorBoundary>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
