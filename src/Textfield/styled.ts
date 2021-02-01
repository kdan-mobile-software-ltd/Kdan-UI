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
  padding: 10px 8px;
  border-radius: 2px;
  width: 100%;
  min-width: 150px;
  box-sizing: border-box;
  outline: none;
  display: block;

  ${({ error }: TextfieldProps) =>
    error
      ? `
      border: solid 1px ${colors.error};

      :focus {
        border: solid 1px ${colors.error};
      }
    `
      : `
      border: solid 1px ${colors.N15};
      
      :focus {
        border: solid 1px ${colors.B50};
      }
    `};

  color: ${({ color }) => colors[color as string] || color};
  background-color: ${({ disabled }) => (disabled ? colors.N10 : colors.N0)};
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-family: ${font.typography};
  font-weight: 500;
  margin-bottom: 6px;
  display: inherit;
  color: inherit;
`;

export const HelpText = styled.span`
  font-size: 12px;
  color: ${colors.N40};
`;
