export const round = (value: number): number => {
  return Math.round(value * 1e5) / 1e5;
};

export const pxToRem = (size: number): string => `${size / 14}rem`;
