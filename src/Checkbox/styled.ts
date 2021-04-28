import styled from 'styled-components';

import colors from '../themes/colors';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Box = styled.div<{
  error: boolean;
  isDisabled: boolean;
}>`
  min-width: 20px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 1px ${({ error }) => (error ? colors.error : colors.N15)};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-sizing: border-box;
  padding: 2px;
  overflow: hidden;
  position: relative;
  display: flex;

  background-color: ${({ isDisabled }) => (isDisabled ? colors.N15 : 'inherit')};

  :hover {
    background-color: ${({ isDisabled }) => (isDisabled ? colors.N15 : colors.N10)};
  }
`;

export const Input = styled.input`
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
`;

export const Label = styled.label`
  margin-left: 12px;
  font-size: 14px;
`;
