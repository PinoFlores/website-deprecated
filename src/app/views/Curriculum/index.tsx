import React, {FunctionComponent} from "react";

import _ from "lodash";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {Card} from "../../components/Card";
import {Job} from "../../model/core/curriculum/Job";
import {List, ListItem} from "../../components/List";
import {ProfileRepository} from "../../model/Repository";
import {Education} from "./../../model/core/curriculum/Education";

export const CurriculumView: FunctionComponent<any> = () => {
  const {curriculum} = ProfileRepository;

  return (
    <>
      <Card style={{padding: "1rem 1.5rem"}}>
        <Typography variant="h6">About me</Typography>
        <div style={{height: "0.9rem"}} />
        <Typography variant="body1">{curriculum.about}</Typography>
      </Card>

      <br />
      <Card style={{padding: "1rem 1.5rem"}}>
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
      <br />
      <Card style={{padding: "1rem 1.5rem"}}>
        <Typography variant="h6">Experience</Typography>
        <List>
          {curriculum.experience.map((experience: Job, index: number) => {
            console.log(experience);

            return (
              <ListItem
                hideIcon
                title={experience.position}
                dateInfo={`${experience.from} ${experience.to}`}
                location={experience.location}
                description={
                  <Box>
                    <ul style={{marginTop: "10px", paddingLeft: "1rem"}}>
                      {experience.details.map((item: string, j: number) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </Box>
                }
                hideDivider={index === curriculum.experience.length - 1}
              />
            );
          })}
        </List>
      </Card>
    </>
  );
};
