import React, {FunctionComponent} from "react";

import {Card, IconButton, Tab, Tabs, Theme} from "@mui/material";
import {ProfileHeaderProps} from "./types";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import {makeStyles, createStyles} from "@mui/styles";

import {Box} from "@mui/system";
import {useTheme} from "../../hooks/useTheme";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    HeaderContainer: {
      borderTopRightRadius: `${0} !important`,
      borderTopLeftRadius: `${0} !important`,
      borderBottomRightRadius: `${theme.spacing(1)} !important`,
      borderBottomLeftRadius: `${theme.spacing(1)} !important`,
    },
    headerBgContainer: {
      height: "9rem",
      background: theme.palette.common.black,
    },
    userInfoContainer: {
      padding: "0 2rem",
      border: "none !important",
      borderTop: "none !important",
      borderTopRightRadius: `${0} !important`,
      borderTopLeftRadius: `${0} !important`,
      borderBottomRightRadius: `${theme.spacing(1)} !important`,
      borderBottomLeftRadius: `${theme.spacing(1)} !important`,
    },
  })
);

export const ProfileHeader: FunctionComponent<ProfileHeaderProps> = (props) => {
  const classes = useStyles();
  const {type, changeTheme} = useTheme();

  return (
    <Card variant="outlined" className={classes.HeaderContainer}>
      <div
        className={classes.headerBgContainer}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >
        <IconButton onClick={() => changeTheme()}>
          {type === "dark" ? (
            <Brightness2Icon style={{color: "#FFF"}} />
          ) : (
            <LightModeIcon style={{color: "#FFF"}} />
          )}
        </IconButton>
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
