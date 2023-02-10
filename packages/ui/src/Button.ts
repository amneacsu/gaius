import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 24px;
  border-width: 2px;
  border-style: solid;
  border-color: #ddd #666 #666 #ddd;
  color: #fff;
  background: #888;
  text-shadow: 1px 1px 1px #555, -1px -1px 1px #aaa;

  &:active {
    position: relative;
    top: 1px;
    opacity: 0.6;
  }
`;
