import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import { Panel } from './Panel';

const MenuWrapper = styled(Panel)`
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: 240px;
  margin: 160px auto 0;

  header {
    text-align: center;
    margin-bottom: 20px;
  }

  ${Button} {
    flex: 1;
    padding: 8px 24px;
  }
`;

export const Menu = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <MenuWrapper>
    <header>{title}</header>
    {children}
  </MenuWrapper>
);
