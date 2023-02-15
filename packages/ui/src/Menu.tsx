import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

const MenuWrapper = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  width: 240px;
  margin: 160px auto 0;

  header {
    text-align: center;
    margin-bottom: 20px;
  }

  ${Button} {
    flex: 1;
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
