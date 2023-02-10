import React from 'react';
import { useWorld } from '@gaius/core';

import * as S from './styles';

export const Debug = () => {
  const world = useWorld();
  return (
    <S.Debug>
      Entity count: {world.entities.length}
    </S.Debug>
  );
};
