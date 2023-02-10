import React from 'react';

import { useStage, Stage } from '../../StageContext';

export const MenuStage = () => {
  const [, setStage] = useStage();

  return (
    <div>
      <h1>MenuStage</h1>
      <button onClick={() => setStage(Stage.Game)}>Play</button>
    </div>
  );
};
