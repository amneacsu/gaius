import styled from 'styled-components';
import { Panel } from '@gaius/ui';

export const Debug = styled(Panel)`
  position: absolute;
  width: 300px;
  right: 0;
  top: 0;
  font-size: 12px;

  h3 {
    margin: 0;
  }
`;

export const DebugGroup = styled.details`

`;

export const DebugGroupName = styled.summary`
  cursor: pointer;
`;

export const DebugGroupContents = styled.div`
  margin-top: 16px;
  margin-left: 16px;
`;
