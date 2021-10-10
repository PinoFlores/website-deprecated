import {Typography, IconButton, alpha, Divider} from "@mui/material";

import _ from "lodash";

import React, {FunctionComponent} from "react";
import {Card} from "../../components/Card";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import {Box} from "@mui/system";
import {useTheme} from "@mui/material/styles";

import {ProfileRepository} from "../../model/Repository";
import {Education} from "./../../model/core/curriculum/Education";

import CheckIcon from "@mui/icons-material/Check";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ConstructionIcon from "@mui/icons-material/Construction";
import {List, ListItem} from "../../components/List";

type StatusIconProps = {
  status: string;
};
const StatusIcon = (props: StatusIconProps) => {
  const {palette} = useTheme();

  let color = palette.primary.light;
  let Icon = ConstructionIcon;

  if (props.status === "done") {
    color = palette.success.light;
    Icon = CheckIcon;
  } else if (props.status === "pending") {
    color = palette.warning.light;
    Icon = AutorenewIcon;
  }

  return (
    <IconButton style={{background: alpha(color, 0.2)}}>
      <Icon style={{color}} />
    </IconButton>
  );
};

export const CurriculumView: FunctionComponent<any> = () => {
  const {palette} = useTheme();

  const {curriculum} = ProfileRepository;

  const textColor = palette.text.primary;
  return (
    <Card style={{padding: "1rem 1.5rem"}}>
      <Typography variant="h6">About me</Typography>
      <div style={{height: "0.9rem"}} />
      <Typography variant="body1">{curriculum.about}</Typography>
      <br />
      <Typography variant="h6">Education</Typography>
      <List>
        {curriculum.educations.map((education: Education, index: number) => {
          return (
            <ListItem
              status={education.status}
              title={education.name}
              dateInfo={education.started_at}
              location={education.center}
              description={<span>{education.details}</span>}
              hideDivider={index === curriculum.educations.length - 1}
            />
          );
        })}
      </List>
    </Card>
  );
};
