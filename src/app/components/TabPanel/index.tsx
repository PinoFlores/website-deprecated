import {Box} from "@mui/system";
import {FunctionComponent} from "react";

interface TabPanelProps {
  children: JSX.Element;
  value: number;
  index: number;
}

export const TabPanel: FunctionComponent<TabPanelProps> = (props) => {
  const {children, value, index} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && children}
    </div>
  );
};
