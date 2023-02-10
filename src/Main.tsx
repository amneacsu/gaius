import React from 'react';
import { createRoot } from 'react-dom/client';

import { MenuStage, MainStage, PauseStage } from './stages';
import { Stage, StageProvider, StageContext } from './StageContext';
import { WorldProvider } from './WorldContext';

const Main = () => {
  return (
    <React.StrictMode>
      <WorldProvider>
        <StageProvider>
          <StageContext.Consumer>
            {([stage]) => {
              switch (stage ) {
                case Stage.MainMenu: return <MenuStage />;
                case Stage.Game: return <MainStage />;
                case Stage.PauseMenu: return <PauseStage />;
                default: throw new Error(`Unhandled stage ${stage}.`);
              }
            }}
          </StageContext.Consumer>
        </StageProvider>
      </WorldProvider>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Main />);
