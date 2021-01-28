import styled from "styled-components";

import { TypographyProps } from "./index";
import colors from "../themes/colors";
import { device } from "../themes/breakpoint";
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
    size.mobileS &&
    `
      @media ${device.mobileS} {
        font-size: ${pxToRem(size.mobileS)};
        letter-spacing: ${`${round(letterSpacing / size.mobileS)}em`};
      }
    `
  }
  ${
    size.tablet &&
    `
      @media ${device.tablet} {
        font-size: ${pxToRem(size.tablet)};
        letter-spacing: ${`${round(letterSpacing / size.tablet)}em`};
      }
    `
  }
  ${
    size.laptop &&
    `
      @media ${device.laptop} {
        font-size: ${pxToRem(size.laptop)};
        letter-spacing: ${`${round(letterSpacing / size.laptop)}em`};
      }
    `
  }
`;

const variants: { [key: string]: string } = {
  h1: buildVariant(
    fontWeight.bold,
    { laptop: 56, tablet: 48, mobileS: 28 },
    1.1,
    -1.5
  ),
  h2: buildVariant(
    fontWeight.bold,
    { laptop: 48, tablet: 32, mobileS: 26 },
    1.1,
    -0.5
  ),
  h3: buildVariant(
    fontWeight.bold,
    { laptop: 32, tablet: 28, mobileS: 22 },
    1.1,
    0
  ),
  h4: buildVariant(
    fontWeight.bold,
    { laptop: 28, tablet: 22, mobileS: 18 },
    1.2,
    0.25
  ),
  h5: buildVariant(
    fontWeight.bold,
    { laptop: 22, tablet: 18, mobileS: 18 },
    1.2,
    0
  ),
  h6: buildVariant(
    fontWeight.bold,
    { laptop: 18, tablet: 18, mobileS: 18 },
    1.2,
    0.15
  ),
  subtitle1: buildVariant(
    fontWeight.bold,
    { laptop: 20, tablet: 20, mobileS: 20 },
    1.2,
    0.15
  ),
  b1: buildVariant(
    fontWeight.regular,
    { laptop: 24, tablet: 18, mobileS: 16 },
    1.4,
    0.15
  ),
  b2: buildVariant(
    fontWeight.regular,
    { laptop: 18, tablet: 16, mobileS: 16 },
    1.4,
    0.15
  ),
  b3: buildVariant(
    fontWeight.regular,
    { laptop: 16, tablet: 14, mobileS: 14 },
    1.4,
    0.15
  ),
  b4: buildVariant(
    fontWeight.regular,
    { laptop: 14, tablet: 14, mobileS: 14 },
    1.4,
    0.15
  ),
  caption: buildVariant(
    fontWeight.regular,
    { laptop: 12, tablet: 12, mobileS: 12 },
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
