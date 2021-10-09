import React, {FunctionComponent} from "react";
import {BasicLayoutProps} from "./types";
import {ProfileInfo} from "../../ProfileInfo";
import {ProfileHeader} from "./../../ProfileHeader/index";
import {Container, Grid, Box, Button} from "@mui/material";
import {Card} from "../../Card";
import {MainContainer} from "./Main";
import {AsideContainer} from "./Aside";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {TabPanel} from "../../TabPanel";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {views} from "../../../views";
const Profile = (props: any) => {
  return <div>Profile</div>;
};

const Algos = (props: any) => {
  return <div>Algos</div>;
};

const BasicLayout: FunctionComponent<BasicLayoutProps> = (props) => {
  const feeds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const tabs = [
    {
      index: 0,
      tabName: "Profile",
      Component: Profile,
    },
    {
      index: 1,
      tabName: "Algo",
      Component: Algos,
    },
  ];

  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: any, index: number) => {
    setValue(index);
    console.log(index);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <AsideContainer>
          <Box style={{padding: "1rem"}}>
            <Button variant="outlined" disableElevation={true} style={{width: "100%"}}>
              <LinkedInIcon style={{fontSize: "1rem"}} />
              &nbsp; Linkedin
            </Button>
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
                >
                  <PersonOutlineOutlinedIcon />
                  {item}
                </Button>
              );
            })}
          </Box>
        </AsideContainer>
        <MainContainer>
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
            <Grid item xl={9}>
              {views.map((tab, i) => {
                const {index, Component} = tab;
                return (
                  <TabPanel key={i} value={value} index={index}>
                    <Component />
                  </TabPanel>
                );
              })}

              {/* {feeds.map((e, i) => {
                return (
                  <>
                    <Card>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque
                      numquam magnam dolorum cumque dicta tempore quae, ipsum assumenda, quisquam
                      voluptatem perferendis ipsam quibusdam ad alias aliquam! Distinctio, voluptas
                      repellendus.
                    </Card>
                    <div style={{height: "1rem"}} />
                  </>
                );
              })} */}
            </Grid>
            <Grid item xl={3}>
              <Card>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque numquam
                magnam dolorum cumque dicta tempore quae, ipsum assumenda, quisquam voluptatem
                perferendis ipsam quibusdam ad alias aliquam! Distinctio, voluptas repellendus.
              </Card>
              <br />
              <Card>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque numquam
                magnam dolorum cumque dicta tempore quae, ipsum assumenda, quisquam voluptatem
                perferendis ipsam quibusdam ad alias aliquam! Distinctio, voluptas repellendus.
              </Card>
            </Grid>
          </Grid>
        </MainContainer>
      </Grid>
    </Container>
  );
};

export default BasicLayout;
