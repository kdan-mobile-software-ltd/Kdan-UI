const defaultSize = 14;

export const round = (value: number): number => {
  return Math.round(value * 1e5) / 1e5;
};

export const pxToRem = (size: number): string => `${size / defaultSize}rem`;

export const hexToRGBA = (hex: string, alpha?: number): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
