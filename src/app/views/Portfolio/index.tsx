import {FunctionComponent} from "react";
import {Card} from "../../components/Card";
import {CardMedia, Card as MUICard, CardContent, Typography, Grid, Chip} from "@mui/material";

export const PortfolioView: FunctionComponent<any> = () => {
  return (
    <>
      <Card style={{padding: "1rem 1.5rem"}}>
        <Typography variant="h6">Experience</Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <MUICard variant="outlined">
              <CardMedia
                component="img"
                height="240"
                image="https://firebasestorage.googleapis.com/v0/b/portfolio-846f8.appspot.com/o/Delinternet-Hub.png?alt=media&token=179c783d-2767-4209-9c93-10ae92e9eda4"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Delinternet Unpaid System
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a system for full unpaid invoices management. Was built using reactjs with
                  antjs, and php with laravel in backend.
                  <br />
                  <br />
                  In this project I was the owner, handling full backend and frontend.
                </Typography>
                <br />
                <ul style={{paddingLeft: "1rem"}}>
                  <li>
                    <Typography>UI Design - Adobe XD</Typography>
                  </li>

                  <li>
                    <Typography>Components Design</Typography>
                  </li>
                  <li>
                    <Typography>Event Driven Comunication</Typography>
                  </li>
                  <li>
                    <Typography>API Design</Typography>
                  </li>
                  <li>
                    <Typography>Proccess Automatation</Typography>
                  </li>
                  <li>
                    <Typography>ACL</Typography>
                  </li>
                  <li>
                    <Typography>Service Integration</Typography>
                  </li>
                  <li>
                    <Typography>Etc.</Typography>
                  </li>
                </ul>
                <br />
                <Chip label="Reactjs" style={{margin: "0 5px 5px 0", padding: "2px"}} />
                <Chip label="Redux" style={{margin: "0 5px 5px 0", padding: "2px"}} />
                <Chip label="Generator" style={{margin: "0 5px 5px 0", padding: "2px"}} />
                <Chip label="Nodejs" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="SQL" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Anviz Protocol" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Sequelize" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Socket.io" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Redis" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Docker" style={{margin: "0 5px 5px 0", padding: "3px"}} />
              </CardContent>
            </MUICard>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <MUICard variant="outlined">
              <CardMedia
                component="img"
                height="240"
                image="https://firebasestorage.googleapis.com/v0/b/portfolio-846f8.appspot.com/o/Delinternet-Hub.png?alt=media&token=179c783d-2767-4209-9c93-10ae92e9eda4"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Delinternet Hub
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project started as a single HRMS system but ends like a hub, where the
                  company host all its services: HRMS, Unpaid System, Website Management System,
                  Access Control Management.
                  <br />
                  <br />
                  In this set of project I participed as Frontend Owner, and in Backend I
                  collaborate in the implementation of some key algorithms that represent very
                  important bussiness logic inside the company and the API implementation.
                </Typography>
                <br />
                <ul style={{paddingLeft: "1rem"}}>
                  <li>
                    <Typography>UI Design - Adobe XD</Typography>
                  </li>

                  <li>
                    <Typography>Components Design</Typography>
                  </li>
                  <li>
                    <Typography>Generator CLI</Typography>
                  </li>
                  <li>
                    <Typography>Event Driven Comunication</Typography>
                  </li>
                  <li>
                    <Typography>
                      Custom Nodejs API to cuminicate with low level Anviz Devices Protocol
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Service for handle client notifications queue: Whatsapp, Telegram, Sms, Email.
                    </Typography>
                  </li>
                  <li>
                    <Typography>ACL</Typography>
                  </li>
                  <li>
                    <Typography>Service Integration</Typography>
                  </li>
                  <li>
                    <Typography>Etc.</Typography>
                  </li>
                </ul>
                <br />
                <Chip label="Reactjs" style={{margin: "0 5px 5px 0", padding: "2px"}} />
                <Chip label="Redux" style={{margin: "0 5px 5px 0", padding: "2px"}} />
                <Chip label="Generator" style={{margin: "0 5px 5px 0", padding: "2px"}} />
                <Chip label="Nodejs" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="SQL" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Anviz Protocol" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Sequelize" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Socket.io" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Redis" style={{margin: "0 5px 5px 0", padding: "3px"}} />
                <Chip label="Docker" style={{margin: "0 5px 5px 0", padding: "3px"}} />
              </CardContent>
            </MUICard>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
