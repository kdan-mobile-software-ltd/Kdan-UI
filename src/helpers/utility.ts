const defaultSize = 14;

export const round = (value: number): number => {
  return Math.round(value * 1e5) / 1e5;
};

export const pxToRem = (size: number): string => `${size / defaultSize}rem`;
