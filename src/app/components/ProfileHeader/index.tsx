import React, {FunctionComponent} from "react";

import {Card, Tab, Tabs} from "@mui/material";
import {ProfileHeaderProps} from "./types";
import {useMakeClasses} from "../../hooks/makeClasses";

import {styles} from "./styles";
import {Box} from "@mui/system";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const ProfileHeader: FunctionComponent<ProfileHeaderProps> = (props) => {
  const classes = useMakeClasses(styles);

  return (
    <Card variant="outlined" className={classes.HeaderContainer}>
      <div
        className={classes.headerBgContainer}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      />
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
