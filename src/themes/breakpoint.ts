export const breakpoint = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

export const device = {
  mobileS: `(min-width: ${breakpoint.mobileS})`,
  mobileM: `(min-width: ${breakpoint.mobileM})`,
  mobileL: `(min-width: ${breakpoint.mobileL})`,
  tablet: `(min-width: ${breakpoint.tablet})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
  desktop: `(min-width: ${breakpoint.desktop})`,
};
