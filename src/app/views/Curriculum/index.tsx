import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  alpha,
  Divider,
} from "@mui/material";
import React, {FunctionComponent} from "react";
import {Card} from "../../components/Card";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import {Box} from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import {useTheme} from "./../../hooks/useTheme";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import ConstructionIcon from "@mui/icons-material/Construction";

export const CurriculumView: FunctionComponent<any> = () => {
  const {palette} = useTheme();

  const textColor = palette.text.primary;
  return (
    <Card style={{padding: "1rem 1.5rem"}}>
      <Typography variant="h6">About me</Typography>
      <div style={{height: "0.9rem"}} />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta perspiciatis veritatis
        beatae repudiandae nesciunt esse, illo voluptatem pariatur placeat quidem quam nisi
        laudantium! Earum, sunt provident? Velit, architecto. Laudantium!
      </Typography>
      <br />
      <Typography variant="h6">Education</Typography>
      {/* <div style={{height: "0.9rem"}} /> */}
      <List sx={{width: "100%", bgcolor: "background.paper"}}>
        <ListItem alignItems="flex-start" style={{width: "100%"}}>
          <ListItemAvatar>
            <IconButton style={{background: alpha(palette.success.light, 0.2)}}>
              <CheckIcon style={{color: palette.success.light}} />
            </IconButton>
          </ListItemAvatar>
          <ListItemText
            secondary={
              <div>
                <Typography variant="subtitle2" style={{fontSize: "16px", color: textColor}}>
                  Graphic Design
                </Typography>
                <Box style={{display: "flex"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <CalendarTodayIcon style={{fontSize: "15px"}} />
                    &nbsp;
                    <Typography variant="body1" style={{fontSize: "14px"}}>
                      2015
                    </Typography>
                  </div>
                  &nbsp; &nbsp;&nbsp;
                  <div style={{display: "flex", alignItems: "center"}}>
                    <PlaceIcon style={{fontSize: "15px"}} />
                    &nbsp;
                    <Typography variant="body1" style={{fontSize: "14px"}}>
                      UDM, Manague, Nic.
                    </Typography>
                  </div>
                </Box>
                {" — Finished"}
              </div>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <IconButton style={{background: alpha(palette.warning.light, 0.2)}}>
              <AutorenewIcon style={{color: palette.warning.light}} />
            </IconButton>
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography variant="subtitle2" style={{fontSize: "16px", color: textColor}}>
                  Computer Science
                </Typography>
                <Box style={{display: "flex"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <CalendarTodayIcon style={{fontSize: "15px"}} />
                    &nbsp;
                    <Typography variant="body1" style={{fontSize: "14px"}}>
                      2017
                    </Typography>
                  </div>
                  &nbsp; &nbsp;&nbsp;
                  <div style={{display: "flex", alignItems: "center"}}>
                    <PlaceIcon style={{fontSize: "15px"}} />
                    &nbsp;
                    <Typography variant="body1" style={{fontSize: "14px"}}>
                      UNA, Heredia, CR
                    </Typography>
                  </div>
                </Box>
                {" — Pending"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <IconButton style={{background: alpha(palette.primary.light, 0.2)}}>
              <ConstructionIcon style={{color: palette.primary.light}} />
            </IconButton>
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography variant="subtitle2" style={{fontSize: "16px", color: textColor}}>
                  Self Learner
                </Typography>
                <Box style={{display: "flex"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <CalendarTodayIcon style={{fontSize: "15px"}} />
                    &nbsp;
                    <Typography variant="body1" style={{fontSize: "14px"}}>
                      2017
                    </Typography>
                  </div>
                  &nbsp; &nbsp;&nbsp;
                  <div style={{display: "flex", alignItems: "center"}}>
                    <PlaceIcon style={{fontSize: "15px"}} />
                    <Typography variant="body1" style={{fontSize: "14px"}}>
                      &nbsp;World Wide Web
                    </Typography>
                  </div>
                </Box>
                {" — Continue..."}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
};
