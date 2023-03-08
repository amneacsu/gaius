import React from 'react';

import config from './config';

export enum Stage {
  MainMenu,
  Pause,
  Game,
  Map,
};

export const StageContext = React.createContext<[
  Stage,
  React.Dispatch<React.SetStateAction<Stage>>
]>(null!);

export const StageProvider = ({ children }: React.PropsWithChildren) => {
  const context = React.useState(config.initialStage);

  return (
    <StageContext.Provider value={context}>
      {children}
    </StageContext.Provider>
  );
};

export const useStage = () => React.useContext(StageContext);
