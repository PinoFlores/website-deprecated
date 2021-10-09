import {FunctionComponent} from "react";

import {Card} from "@mui/material";
import {ProfileHeaderProps} from "./types";
import {useMakeClasses} from "../../hooks/makeClasses";

import {styles} from "./styles";

export const ProfileHeader: FunctionComponent<ProfileHeaderProps> = (props) => {
  const classes = useMakeClasses(styles);
  return (
    <Card variant="outlined" className={classes.HeaderContainer}>
      <div
        className={classes.headerBgContainer}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      />
      <div className={classes.userInfoContainer}>{props?.userInfoComponent}</div>
    </Card>
  );
};
