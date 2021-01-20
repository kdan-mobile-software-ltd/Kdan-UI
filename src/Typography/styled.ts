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
    fontWeight.medium,
    { laptop: 56, tablet: 42, mobileS: 28 },
    1.167,
    -1.5
  ),
  h2: buildVariant(
    fontWeight.medium,
    { laptop: 42, tablet: 34, mobileS: 24 },
    1.2,
    -0.5
  ),
  h3: buildVariant(
    fontWeight.medium,
    { laptop: 32, tablet: 28, mobileS: 20 },
    1.167,
    0
  ),
  h4: buildVariant(
    fontWeight.medium,
    { laptop: 32, tablet: 28, mobileS: 20 },
    1.235,
    0.25
  ),
  h5: buildVariant(
    fontWeight.regular,
    { laptop: 30, tablet: 26, mobileS: 20 },
    1.334,
    0
  ),
  h6: buildVariant(
    fontWeight.regular,
    { laptop: 28, tablet: 24, mobileS: 20 },
    1.6,
    0.15
  ),
  subtitle1: buildVariant(
    fontWeight.regular,
    { tablet: 18, mobileS: 16 },
    1.75,
    0.15
  ),
  subtitle2: buildVariant(
    fontWeight.medium,
    { tablet: 16, mobileS: 14 },
    1.57,
    0.1
  ),
  body1: buildVariant(
    fontWeight.regular,
    { tablet: 16, mobileS: 14 },
    1.5,
    0.15
  ),
  body2: buildVariant(
    fontWeight.regular,
    { tablet: 14, mobileS: 12 },
    1.43,
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
    color: ${color && color !== "inherit" ? colors[color] : "inherit"};
    margin-bottom: ${paragraph ? "16px" : ""};
    display: ${display};
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
