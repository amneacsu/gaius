import React from 'react';
import { useWorld } from '@gaius/core';

import * as S from './styles';

export const Debug = () => {
  const world = useWorld();

  return (
    <S.Debug>
      {world.entities.map((entity, index) => {
        return (
          <S.DebugGroup key={index}>
            <S.DebugGroupName>Entity {index}</S.DebugGroupName>
            <S.DebugGroupContents>
              {entity.components.map((component, index) => {
                return (
                  <div key={index}>
                    {component._brand}
                  </div>
                );
              })}
            </S.DebugGroupContents>
          </S.DebugGroup>
        );
      })}
    </S.Debug>
  );
};
