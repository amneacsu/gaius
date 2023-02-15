import styled from 'styled-components';
import { Panel } from '@gaius/ui';

export const ToggleDebug = styled.button`
  position: fixed;
  right: 0;
  top: 0;
  margin: 4px;
  &:before {
    content: "debug";
  }
`;

export const Debug = styled(Panel)`
  position: absolute;
  width: 300px;
  right: 0;
  top: 0;
  font-size: 12px;

  h3 {
    margin: 0 0 10px;
  }

  ul {
    margin: 10px 0 0 0;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &:empty {
      display: none;
    }
  }
`;

export const DebugGroup = styled.details`

`;

export const DebugGroupName = styled.summary`
  cursor: pointer;
`;

export const DebugGroupContents = styled.div`
  margin: 4px 0;
  text-indent: 10px;
`;
