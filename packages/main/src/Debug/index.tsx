import React from 'react';
import { Button } from '@gaius/ui';
import { useStage } from '../StageContext';
import { useWorld } from '../WorldContext';
import * as S from './styles';

export const Debug = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { world, entities } = useWorld();
  const [stage] = useStage();

  // console.log('render debug', world.entities);

  if (!isOpen) {
    return (
      <S.ToggleDebug onClick={() => setIsOpen(true)} />
    );
  }

  return (
    <S.Debug>
      <h3>Stage: {stage}</h3>

      <>
        <Button onClick={() => world.createEntity()}>Create entity</Button>
        <Button onClick={() => world.execute()}>Execute</Button>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </>

      <ul>
        {entities.map((entity, index) => {
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
