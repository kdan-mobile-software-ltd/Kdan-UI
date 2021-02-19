import styled from "styled-components";

import { TextfieldProps } from "./index";
import colors from "../themes/colors";

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
  padding: 11px 8px;
  border-radius: 2px;
  width: 100%;
  min-width: 134px !important;
  box-sizing: border-box;
  outline: none;
  display: block;
  box-shadow: none !important;

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
  background-color: ${({ disabled }) => (disabled ? colors.N15 : colors.N0)};
`;
