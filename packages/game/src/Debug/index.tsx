import React from 'react';
import { useStage, useWorld } from '@gaius/core';
import { Button } from '@gaius/ui';

import * as S from './styles';

export const Debug = () => {
  const world = useWorld();
  const [stage] = useStage();

  return (
    <S.Debug>
      <h3>Stage: {stage}</h3>

      {world.entities.length === 0 && (
        <div>No entities.</div>
      )}

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

      <>
        <Button onClick={() => world.createEntity()}>Create entity</Button>
      </>
    </S.Debug>
  );
};
