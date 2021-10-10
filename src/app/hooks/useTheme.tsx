import React from "react";

import {ThemeContext} from "../contexts/ThemeContext";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be inside ThemeContext");
  return context;
};
