import React, {FunctionComponent} from "react";

import _ from "lodash";
import {Box} from "@mui/system";
import {Chip, Typography} from "@mui/material";
import {Card} from "../../components/Card";
import {Job} from "../../model/core/curriculum/Job";
import {List, ListItem} from "../../components/List";

import {Education} from "./../../model/core/curriculum/Education";
import {Skill} from "./../../model/core/curriculum/Skill";
import {useData} from "./../../hooks/useData";

export const CurriculumView: FunctionComponent<any> = () => {
  const {profile} = useData();
  const {curriculum} = profile;

  return (
    <React.Fragment>
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
                key={index}
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
                key={index}
                hideIcon
                title={experience.position}
                dateInfo={`${experience.from} - ${experience.to}`}
                location={`${experience.location} / ${experience.at}`}
                description={
                  <Box>
                    <ul style={{marginTop: "10px", paddingLeft: "1rem"}}>
                      {experience.details.map((item: string, j: number) => {
                        return <li key={j}>{item}</li>;
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
      <br />
      <Card style={{padding: "1rem 1.5rem"}}>
        <Typography variant="h6">Skills</Typography>
        {curriculum.skills.map((skill: Skill, index: number) => {
          return <Chip key={index} label={skill.name} style={{margin: "0 5px 5px 0"}} />;
        })}
      </Card>
    </React.Fragment>
  );
};
