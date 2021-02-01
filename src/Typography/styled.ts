import styled from "styled-components";

import { TypographyProps } from "./index";
import colors from "../themes/colors";
import breakpoints from "../themes/breakpoints";
import fonts from "../themes/fonts";
import { pxToRem, round } from "../helpers/utility";

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const buildVariant = (
  fontWeight: number,
  size: { [key: string]: number },
  lineHeight: number,
  letterSpacing: number
) => `
  font-family: ${fonts.typography};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};

  ${
    size.lg &&
    `
      @media ${breakpoints.up("lg")} {
        font-size: ${pxToRem(size.lg)};
        letter-spacing: ${`${round(letterSpacing / size.lg)}em`};
      }
    `
  }
  ${
    size.md &&
    `
      @media ${breakpoints.down("lg")} {
        font-size: ${pxToRem(size.md)};
        letter-spacing: ${`${round(letterSpacing / size.md)}em`};
      }
    `
  }
  ${
    size.sm &&
    `
      @media ${breakpoints.down("md")} {
        font-size: ${pxToRem(size.sm)};
        letter-spacing: ${`${round(letterSpacing / size.sm)}em`};
      }
    `
  }
`;

const variants: { [key: string]: string } = {
  h1: buildVariant(fontWeight.bold, { lg: 56, md: 48, sm: 28 }, 1.1, -1.5),
  h2: buildVariant(fontWeight.bold, { lg: 48, md: 32, sm: 26 }, 1.1, -0.5),
  h3: buildVariant(fontWeight.bold, { lg: 32, md: 28, sm: 22 }, 1.1, 0),
  h4: buildVariant(fontWeight.bold, { lg: 28, md: 22, sm: 18 }, 1.2, 0.25),
  h5: buildVariant(fontWeight.bold, { lg: 22, md: 18, sm: 18 }, 1.2, 0),
  h6: buildVariant(fontWeight.bold, { lg: 18, md: 18, sm: 18 }, 1.2, 0.15),
  subtitle1: buildVariant(
    fontWeight.bold,
    { lg: 20, md: 20, sm: 20 },
    1.2,
    0.15
  ),
  b1: buildVariant(fontWeight.regular, { lg: 24, md: 18, sm: 16 }, 1.4, 0.15),
  b2: buildVariant(fontWeight.regular, { lg: 18, md: 16, sm: 16 }, 1.4, 0.15),
  b3: buildVariant(fontWeight.regular, { lg: 16, md: 14, sm: 14 }, 1.4, 0.15),
  b4: buildVariant(fontWeight.regular, { lg: 14, md: 14, sm: 14 }, 1.4, 0.15),
  caption: buildVariant(
    fontWeight.regular,
    { lg: 12, md: 12, sm: 12 },
    1.5,
    0.15
  ),
};

const TypographyRoot = styled.div`
  ${({
    align,
    color,
    paragraph,
    display,
    noWrap,
    variant,
  }: TypographyProps) => `
    text-align: ${align};
    color: ${(color && colors[color]) || color};
    margin-bottom: ${paragraph ? "16px" : ""};
    display: ${display};
    margin: 0;

    ${
      noWrap
        ? `
          overflow: hidden;
          textOverflow: ellipsis;
          whiteSpace: nowrap;
        `
        : ""
    }

    ${variants[variant]}
  `}
`;

export default TypographyRoot;
