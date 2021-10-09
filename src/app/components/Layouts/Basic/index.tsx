import React, {FunctionComponent} from "react";
import {Card, Container, Grid, Box, Button, Typography, Paper} from "@mui/material";
import {BasicLayoutProps} from "./types";
import {useTheme} from "./../../../hooks/useTheme";
import {Avatar} from "./../../Avatar/index";
import {ProfileInfo} from "../../ProfileInfo";

const BasicLayout: FunctionComponent<BasicLayoutProps> = (props) => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xl={2}>
          <Box style={{padding: "1rem"}}>
            <Button variant="contained" disableElevation={true}>
              Download CV
            </Button>
            <br />
            <br />
            {["Profile", "Feed"].map((item, i) => {
              return (
                <Button variant="text" style={{width: "100%"}}>
                  {item}
                </Button>
              );
            })}
          </Box>
        </Grid>
        <Grid item xl={10}>
          <Card
            variant="outlined"
            style={{
              borderTop: "none",
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomRightRadius: theme.spacing(1),
              borderBottomLeftRadius: theme.spacing(1),
            }}
          >
            <div
              style={{
                height: "9rem",
                background: theme.palette.grey[700],
                backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C4D16AQHE2kPwC5uwAw/profile-displaybackgroundimage-shrink_350_1400/0/1618418698151?e=1639008000&v=beta&t=stAh3fn9DueG9r1g2J7PJQcH7uBB1hM-DboZv-SVYRw)`,
              }}
            ></div>
            <div
              style={{
                padding: "0 2rem",
                height: "10rem",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: theme.spacing(1),
                borderBottomLeftRadius: theme.spacing(1),
              }}
            >
              <ProfileInfo
                style={{marginTop: "-2rem"}}
                pictureSrc="https://media-exp1.licdn.com/dms/image/C4D03AQFEvfVLdcIr0A/profile-displayphoto-shrink_800_800/0/1553727303871?e=1639008000&v=beta&t=BBsgkBvEkgE-NDFML98x78d424iR_9C-x6IiZ0f8jBI"
                username="Jose Aburto"
                position="Full Stack Developer"
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicLayout;
