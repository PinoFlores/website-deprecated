import React, {FunctionComponent} from "react";

import {alpha, Box} from "@mui/system";
import {useStyles} from "./styles";
import {ProfileHeaderProps} from "./types";
import {Button, IconButton, Tab, Tabs} from "@mui/material";

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

  return (
    <Card className={classes.HeaderContainer}>
      <div className={classes.headerBgContainer} style={{borderRadius: 0}}>
        <div className={classes.topActions}>
          <span></span>
          <div>
            <Button
              href="https://www.linkedin.com/in/jose-aburto-92468a13b/"
              variant="contained"
              className={classes.linkedinBtn}
              disableElevation
            >
              Linkedin
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.userInfoContainer}>
        {props?.userInfoComponent}
        <br />
        <Box>
          <Tabs
            scrollButtons
            variant="scrollable"
            allowScrollButtonsMobile
            value={props.tabValue}
            onChange={props.onTabChange}
            aria-label="scrollable force tabs example"
          >
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
