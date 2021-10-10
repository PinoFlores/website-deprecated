import React, {FunctionComponent} from "react";
import {BasicLayoutProps} from "./types";
import {ProfileInfo} from "../../ProfileInfo";
import {ProfileHeader} from "./../../ProfileHeader/index";
import {Grid, Box, Button, AppBar, Toolbar, Typography, IconButton} from "@mui/material";
import {Card} from "../../Card";
import {useTheme} from "@mui/material/styles";
import {MainContainer} from "./Main";
import {AsideContainer} from "./Aside";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {TabPanel} from "../../TabPanel";
import {views} from "../../../views";
import {useMediaQuery} from "../../../hooks/useMediaQuery";
import {useChangeTheme} from "../../../hooks/useChangeTheme";

import {useStyles} from "./styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";

import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";

import CV from "../../../asset/CV - JOSE ABURTO - FULL STACK DEVELOPER.jpg";

const BasicLayout: FunctionComponent<BasicLayoutProps> = (props) => {
  const {mode, toggleColorMode} = useChangeTheme();
  const mq = useMediaQuery();
  const [value, setValue] = React.useState<number>(0);

  const classes = useStyles({mq})();

  const theme = useTheme();

  const handleChange = (event: any, index: number) => {
    setValue(index);
    console.log(index);
  };

  const dark = <Brightness2OutlinedIcon className={classes.dark} />;
  const light = <LightModeIcon className={classes.light} />;

  const isAsideVisible = true;
  // const isAsideVisible = mq.isExtraSmallDevice || mq.isSmallDevice || mq.isMediumDevice;
  // const isDevice =
  return (
    <Box
      style={{
        paddingLeft: mq.isExtraSmallDevice
          ? 0
          : mq.isSmallDevice
          ? "2.5rem"
          : mq.isMediumDevice
          ? "6rem"
          : mq.isLargeDevice
          ? "8rem"
          : "20rem",
        paddingRight: mq.isExtraSmallDevice
          ? 0
          : mq.isSmallDevice
          ? "2.5rem"
          : mq.isMediumDevice
          ? "6rem"
          : mq.isLargeDevice
          ? "8rem"
          : "20rem",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        style={{
          color: theme.palette.text.primary,
          background: theme.palette.background.paper,
          borderBottom: `${mq.isExtraSmallDevice ? 0 : "1px"} solid ${theme.palette.divider}`,
          borderRight: `${mq.isExtraSmallDevice ? 0 : "1px"} solid ${theme.palette.divider}`,
          borderLeft: `${mq.isExtraSmallDevice ? 0 : "1px"} solid ${theme.palette.divider}`,
          borderTop: "none !important",

          borderBottomLeftRadius: `${mq.isExtraSmallDevice ? 0 : "10px"}`,
          borderBottomRightRadius: `${mq.isExtraSmallDevice ? 0 : "10px"}`,
        }}
      >
        <Toolbar variant="dense" style={{padding: "0.5rem 1rem"}}>
          <Typography variant="h6" color="inherit" component="div" sx={{flexGrow: 1}}>
            Developers
          </Typography>
          <IconButton className={classes.themeSwitcher} onClick={() => toggleColorMode()}>
            <SimCardDownloadOutlinedIcon
              className={mode === "dark" ? classes.light : classes.dark}
            />
          </IconButton>
          &nbsp; &nbsp;
          <IconButton className={classes.themeSwitcher} onClick={() => toggleColorMode()}>
            {mode === "dark" ? light : dark}
          </IconButton>
        </Toolbar>
      </AppBar>

      {mq.isExtraSmallDevice ? null : <br />}

      <Grid container spacing={3}>
        {isAsideVisible ? null : (
          <AsideContainer>
            <Box style={{padding: "1rem 0"}}>
              <br />
              <br />
              {["Profile", "Feed"].map((item, i) => {
                return (
                  <Button
                    key={i}
                    variant="text"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      toggleColorMode();
                    }}
                  >
                    <PersonOutlineOutlinedIcon />
                    {item}
                  </Button>
                );
              })}
            </Box>
          </AsideContainer>
        )}
        <MainContainer responsive={{xs: 12, sm: 12, md: 12, lg: 12}}>
          <ProfileHeader
            tabs={views}
            tabValue={value}
            onTabChange={handleChange}
            backgroundImage="https://media-exp1.licdn.com/dms/image/C4D16AQHE2kPwC5uwAw/profile-displaybackgroundimage-shrink_350_1400/0/1618418698151?e=1639008000&v=beta&t=stAh3fn9DueG9r1g2J7PJQcH7uBB1hM-DboZv-SVYRw"
            userInfoComponent={
              <ProfileInfo
                style={{marginTop: "-2rem"}}
                pictureSrc="https://media-exp1.licdn.com/dms/image/C4D03AQFEvfVLdcIr0A/profile-displayphoto-shrink_800_800/0/1553727303871?e=1639008000&v=beta&t=BBsgkBvEkgE-NDFML98x78d424iR_9C-x6IiZ0f8jBI"
                username="Jose Aburto"
                position="Full Stack Developer"
              />
            }
          />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
              {views.map((tab, i) => {
                const {index, Component} = tab;
                return (
                  <TabPanel key={i} value={value} index={index}>
                    <Component />
                  </TabPanel>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
              <Card>
                <img src={CV} width="100%" alt="" />
                {/* &nbsp; */}
                <Button
                  disableElevation
                  style={{color: theme.palette.common.white, width: "100%"}}
                  variant="contained"
                >
                  Download
                </Button>
              </Card>
            </Grid>
          </Grid>
          <br />
        </MainContainer>
      </Grid>
    </Box>
  );
};

export default BasicLayout;
