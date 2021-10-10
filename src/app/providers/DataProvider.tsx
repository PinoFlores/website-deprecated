import React, {ReactNode} from "react";
import {DataContext} from "../contexts/DataContext";
import {respository} from "../model/Repository";

interface ThemeProviderProps {
  children: ReactNode;
}

export const DataProvider = (props: ThemeProviderProps) => {
  const {children} = props;
  return <DataContext.Provider value={respository}>{children}</DataContext.Provider>;
};
