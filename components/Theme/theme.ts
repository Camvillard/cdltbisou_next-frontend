export const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

export const themeFonts = {
  regular: "objektiv-mk1, sans-serif", // 300, 400, 700
  accent: "attribute-mono, sans-serif", // 300 / 400
  // accent: "gemeli-mono, serif;", // 300 / 400
};

export const themeColors = {
  golden: "#C49A70",
  teal: "#A9CDC9",
  coral: "#C95E64",
  darkBlue: "#242933",
  gray: "#565A63",
  mediumGray: "#959BA7",
  lightGray: "#E3E8ED",
};

const {
  golden,
  teal,
  coral,
  darkBlue,
  gray,
  mediumGray,
  lightGray,
} = themeColors;

export type Breakpoints = {
  default: string;
  xsm?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export const themeBreakpoints = {
  xsm: "410px",
  sm: "768px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
};
