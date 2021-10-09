import {ReactNode} from "react";

interface TabProps {
  name: string;
  index: number;
}
export interface ProfileHeaderProps {
  backgroundImage: string;
  userInfoComponent: JSX.Element;
  tabs: Array<TabProps>;
  tabValue: number;
  onTabChange: (event: any, index: number) => void;
}
