import React from 'react';
import { createRoot } from 'react-dom/client';

import { MenuStage, MainStage, PauseStage } from './stages';
import { Stage, StageProvider, StageContext } from './StageContext';
import { WorldProvider } from './WorldContext';

const Main = () => {
  return (
    <WorldProvider>
      <StageProvider>
        <StageContext.Consumer>
          {([stage]) => {
            switch (stage ) {
              case Stage.MenuStage: return <MenuStage />;
              case Stage.MainStage: return <MainStage />;
              case Stage.PauseStage: return <PauseStage />;
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
