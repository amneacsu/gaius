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

type BackgroundId = 'menu' | 'debug' | 'pause' | 'game';
const backgrounds: Record<BackgroundId, string> = {
  menu: './assets/BACK01SCR.png',
  debug: './assets/BACK02SCR.png',
  pause: './assets/BACK04SCR.png',
  game: './assets/BACK05SCR.png',
};

// './assets/BACK01SCR.png',
// './assets/BACK02SCR.png',
// './assets/BACK03SCR.png',
// './assets/BACK04SCR.png',
// './assets/BACK05SCR.png',
// './assets/BACK07SCR.png',
// './assets/BACK12SCR.png',
// './assets/BACK13SCR.png',
// './assets/BACK14SCR.png',
// './assets/BACK15SCR.png',
// './assets/BACK16SCR.png',
// './assets/BACK17SCR.png',

export const Background = ({
  id,
}: {
  id: BackgroundId;
}) => {
  return (
    <BackgroundWrapper url={backgrounds[id]} />
  );
};
