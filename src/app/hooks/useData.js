import React from "react";
import {DataContext} from "../contexts/DataContext";

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("make sure useChangeTheme");
  return context;
};
