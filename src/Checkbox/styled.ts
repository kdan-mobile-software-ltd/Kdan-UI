import styled from "styled-components";

import colors from "../themes/colors";
import { hexToRGBA } from "../helpers/utility";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Box = styled.div<{
  isChecked: boolean;
  error: boolean;
  isDisabled: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 1px ${({ error }) => (error ? colors.error : colors.N15)};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-sizing: border-box;
  padding: 2px;
  overflow: hidden;

  background-color: ${({ isChecked, isDisabled }) =>
    (isDisabled && colors.N15) ||
    (isChecked && hexToRGBA(colors.B50, 0.4)) ||
    "inherit"};

  :hover {
    background-color: ${({ isChecked, isDisabled }) =>
      (!isDisabled && isChecked && hexToRGBA(colors.B50, 0.7)) ||
      (!isDisabled && colors.N10) ||
      colors.N15};
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
