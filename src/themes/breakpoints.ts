type BreakpointsType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const BREAKPOINTS = {
  xs: 0,
  sm: 575,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};

const down = (key: BreakpointsType): string =>
  `(max-width: ${BREAKPOINTS[key] - 0.5}px)`;

const up = (key: BreakpointsType): string =>
  `(min-width: ${BREAKPOINTS[key]}px)`;

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
