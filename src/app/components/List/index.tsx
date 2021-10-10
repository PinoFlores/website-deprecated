import React, {FunctionComponent, ReactNode} from "react";

import _ from "lodash";
import {
  Box,
  Divider,
  useTheme,
  Typography,
  ListItemText,
  ListItemAvatar,
  List as MUIList,
  ListItem as MUILisItem,
} from "@mui/material";
import {StatusIcon} from "../Status";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface Props {
  children?: ReactNode;
}

export const List: FunctionComponent<Props> = (props) => {
  return <MUIList sx={{width: "100%", bgcolor: "background.paper"}}>{props.children}</MUIList>;
};

// for design used only.
// Use direct MUI components for extends
interface ItemProps {
  hideDivider?: boolean;
  hideIcon?: boolean;
  title?: string;
  status?: string;
  dateInfo?: string | number;
  location?: string;
  description?: ReactNode;
}

export const ListItem: FunctionComponent<ItemProps> = (props) => {
  const {palette} = useTheme();
  const textColor = palette.text.primary;

  const getDivider = () => {
    if (!_.has(props, "hideDivider")) return null;
    if (props.hideDivider) return null;
    else return <Divider variant="fullWidth" component="li" />;
  };

  return (
    <>
      <MUILisItem alignItems="flex-start" style={{width: "100%"}}>
        {props.hideIcon ? null : (
          <ListItemAvatar>
            <StatusIcon status={props.status} />
          </ListItemAvatar>
        )}

        <ListItemText
          secondary={
            <div>
              <Typography variant="subtitle2" style={{fontSize: "16px", color: textColor}}>
                {props.title}
              </Typography>
              <Box style={{display: "flex"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                  <CalendarTodayIcon style={{fontSize: "15px"}} />
                  &nbsp;
                  <Typography variant="body1" style={{fontSize: "14px"}}>
                    {props.dateInfo}
                  </Typography>
                </div>
                &nbsp; &nbsp;&nbsp;
                <div style={{display: "flex", alignItems: "center"}}>
                  <PlaceIcon style={{fontSize: "15px"}} />
                  &nbsp;
                  <Typography variant="body1" style={{fontSize: "14px"}}>
                    {props.location}
                  </Typography>
                </div>
              </Box>
              {props.description}
            </div>
          }
        />
      </MUILisItem>
      {getDivider()}
    </>
  );
};
