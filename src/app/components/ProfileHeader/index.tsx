import React, {FunctionComponent} from "react";

import {alpha, Box} from "@mui/system";
import {useStyles} from "./styles";
import {ProfileHeaderProps} from "./types";
import {IconButton, Tab, Tabs} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import {useChangeTheme} from "../../hooks/useChangeTheme";
import {useMediaQuery} from "./../../hooks/useMediaQuery";
import {Card} from "../Card";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const ProfileHeader: FunctionComponent<ProfileHeaderProps> = (props) => {
  const mq = useMediaQuery();
  const classes = useStyles({src: props.backgroundImage, mq})();
  const {mode, toggleColorMode} = useChangeTheme();

  const dark = <Brightness2Icon className={classes.dark} />;
  const light = <LightModeIcon className={classes.light} />;

  return (
    <Card className={classes.HeaderContainer}>
      <div className={classes.headerBgContainer}>
        <div className={classes.topActions}>
          <span></span>
          <IconButton className={classes.themeSwitcher} onClick={() => toggleColorMode()}>
            {mode === "dark" ? light : dark}
          </IconButton>
        </div>
      </div>
      <div className={classes.userInfoContainer}>
        {props?.userInfoComponent}
        <br />
        <Box>
          <Tabs value={props.tabValue} onChange={props.onTabChange} aria-label="basic tabs example">
            {props.tabs.map((tab, i) => {
              const {index, name} = tab;
              return <Tab key={i} label={name} {...a11yProps(index)} />;
            })}
          </Tabs>
        </Box>
      </div>
    </Card>
  );
};
