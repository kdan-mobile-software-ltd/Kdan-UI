import styled from "styled-components";

import { TextfieldProps } from "./index";
import colors from "../themes/colors";
import font from "../themes/fonts";

export const FormControl = styled.div`
  display: inline-block;
  position: relative;
  ${({ fullWidth, error }: TextfieldProps) => `
    width: ${fullWidth ? "100%" : "auto"};
    color: ${error ? colors.error : colors.N100};
  `};
`;

export const InputElement = styled.input`
  font-size: 14px;
  padding: 10px;
  border-radius: 2px;
  width: 100%;
  min-width: 240px;
  box-sizing: border-box;
  outline: none;

  ${({ error }: TextfieldProps) =>
    error
      ? `
      border: solid 1px ${colors.error};
    `
      : `
      border: solid 1px ${colors.N10};
    `};
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-family: ${font.typography};
  font-weight: 500;
  margin-bottom: 6px;
  display: inherit;
  color: inherit;
`;

export const HelpText = styled.span``;
