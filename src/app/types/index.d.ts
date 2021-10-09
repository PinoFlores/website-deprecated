type BreakPointType = "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | bool;

export type Responsive = {
  xs?: BreakPointType;
  sm?: BreakPointType;
  md?: BreakPointType;
  lg?: BreakPointType;
  xl?: BreakPointType;
};
