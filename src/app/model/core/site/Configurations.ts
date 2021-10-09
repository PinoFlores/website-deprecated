import _ from "lodash";

import {Responsive} from "../../../types";
import {Theme} from "../theme";

interface GridElement {
  visible: boolean;
  responsive?: Responsive;
}

interface LayoutConfiguration {
  aside: GridElement;
  main: GridElement;
}

interface BreakPointsRules {
  xs: LayoutConfiguration;
  sm: LayoutConfiguration;
  md: LayoutConfiguration;
  ld: LayoutConfiguration;
  xl: LayoutConfiguration;
}

interface Themes {
  light: Theme;
  dark: Theme;
}

export interface WebLayoutConfigurations {
  backgroundSrc: string;
  themes: Themes;
  breakpointRules: BreakPointsRules;
}
