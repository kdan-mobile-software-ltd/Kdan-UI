type BreakpointsType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const BREAKPOINTS = {
  xs: 0,
  sm: 425,
  md: 767,
  lg: 1024,
  xl: 1440,
  xxl: 1920,
};

const down = (key: BreakpointsType): string =>
  `(max-width: ${BREAKPOINTS[key]}px)`;

const up = (key: BreakpointsType): string =>
  `(min-width: ${BREAKPOINTS[key] + 1}px)`;

const only = (key: BreakpointsType): string =>
  `(min-width: ${BREAKPOINTS[key]}px) and (max-width: ${BREAKPOINTS[key]}px)`;

const between = (key1: BreakpointsType, key2: BreakpointsType): string =>
  `(min-width: ${BREAKPOINTS[key1]}px) and (max-width: ${BREAKPOINTS[key2]}px)`;

export const breakpoints = {
  down,
  up,
  only,
  between,
};

export default breakpoints;
