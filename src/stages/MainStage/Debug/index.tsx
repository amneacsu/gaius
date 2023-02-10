import React from 'react';

import * as S from './styles';
import { useWorld } from '../../../core';

export const Debug = () => {
  const world = useWorld();
  return (
    <S.Debug>
      Entity count: {world.entities.length}
    </S.Debug>
  );
};
