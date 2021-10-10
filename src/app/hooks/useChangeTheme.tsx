import React from "react";
import {ColorModeContext} from "../..";

export const useChangeTheme = () => {
  const context = React.useContext(ColorModeContext);
  if (!context) throw new Error("make sure useChangeTheme");
  return context;
};
