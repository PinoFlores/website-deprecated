import React from "react";
import {Theme} from "../model/core/theme";

export type ThemeType = "light" | "dark";

interface ThemeProps {
  type: ThemeType;
  theme: Theme;
  changeTheme: () => Theme;
}
export const ThemeContext = React.createContext<ThemeProps>({} as ThemeProps);
