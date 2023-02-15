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

      <>
        <Button onClick={() => world.createEntity()}>Create entity</Button>
      </>

      <ul>
        {world.entities.map((entity, index) => {
          return (
            <li key={index}>
              <S.DebugGroup>
                <S.DebugGroupName>Entity {index}</S.DebugGroupName>
                <S.DebugGroupContents>
                  {entity.components.length === 0 && (
                    <div>No components.</div>
                  )}

                  {entity.components.map((component, index) => {
                    return (
                      <div key={index}>
                        {component._brand}
                      </div>
                    );
                  })}
                </S.DebugGroupContents>
              </S.DebugGroup>
            </li>
          );
        })}
      </ul>
    </S.Debug>
  );
};
