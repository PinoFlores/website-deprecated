import {FunctionComponent} from "react";
import {BasicLayoutProps} from "./types";
import {ProfileInfo} from "../../ProfileInfo";
import {ProfileHeader} from "./../../ProfileHeader/index";
import {Container, Grid, Box, Button} from "@mui/material";
import {Card} from "../../Card";

const BasicLayout: FunctionComponent<BasicLayoutProps> = (props) => {
  const feeds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
          <ProfileHeader
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
              {feeds.map((e, i) => {
                return (
                  <>
                    <Card>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque
                      numquam magnam dolorum cumque dicta tempore quae, ipsum assumenda, quisquam
                      voluptatem perferendis ipsam quibusdam ad alias aliquam! Distinctio, voluptas
                      repellendus.
                    </Card>
                    {i === feeds.length - 1 ? null : <div style={{height: "1rem"}} />}
                  </>
                );
              })}
            </Grid>
            <Grid item xl={3}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicLayout;
