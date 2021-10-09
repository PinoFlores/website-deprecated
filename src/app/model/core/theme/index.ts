interface Spacing {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

interface Color {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface Palette {
  type: "light" | "dark";
  common: {
    black: string;
    white: string;
  };
  primary: Color;
  secondary: Color;
  error: Color;
  warning: Color;
  success: Color;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  divider: string;
  background: {
    paper: string;
    default: string;
  };
}

export interface Theme {
  palette: Palette;
  borderRadius: string;
  spacing: Spacing;
}
