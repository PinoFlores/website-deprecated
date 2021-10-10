import React from "react";

import {Profile} from "../model/core/Profile";
import {Themes, WebLayoutConfigurations} from "../model/core/site/Configurations";

interface DataContextProps {
  profile: Profile;
  layoutConfigs: WebLayoutConfigurations;
  themes: Themes;
}
export const DataContext = React.createContext<DataContextProps>({} as DataContextProps);
