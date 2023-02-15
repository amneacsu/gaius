import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div<{
  url: string;
}>`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url('${(props) => props.url}');
  background-size: cover;
  opacity: 0.5;
`;

type BackgroundId = 'menu' | 'game' | 'pause';
const backgrounds: Record<BackgroundId, string> = {
  menu: './assets/menu.png',
  game: './assets/game.png',
  pause: './assets/xcom.png',
};

export const Background = ({
  id,
}: {
  id: BackgroundId;
}) => {
  return (
    <BackgroundWrapper url={backgrounds[id]} />
  );
};
