import React, {ReactNode} from "react";

import {ThemeContext, ThemeType} from "../contexts/ThemeContext";
import {Themes} from "../model/core/site/Configurations";
import {Theme} from "../model/core/theme";

interface ThemeProviderProps {
  children: ReactNode;
  themes: Themes;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const {themes, children} = props;
  const [selected, setSelected] = React.useState<Theme>(themes.light);
  const [type, setType] = React.useState<ThemeType>("light");

  const changeTheme = (): Theme => {
    const newType = type === "dark" ? "light" : "dark";
    const theme: Theme = themes[newType];
    setType(newType);
    setSelected(theme);
    return theme;
  };

  const values = React.useMemo(() => {
    return {
      type,
      theme: selected,
      changeTheme,
    };
  }, [selected]);

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
