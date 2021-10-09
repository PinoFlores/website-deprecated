import React from "react";

import {Avatar} from "../Avatar";
import {Typography} from "@mui/material";
import {ProfileInfoProps} from "./types.d";
import {useTheme} from "../../hooks/useTheme";

export const ProfileInfo = (props: ProfileInfoProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        ...props?.style,
      }}
    >
      <Avatar src={props?.pictureSrc || ""} />
      <div style={{marginLeft: "0.7rem"}}>
        <br />
        <Typography variant="subtitle2" style={{fontSize: theme.spacing(3)}}>
          {props?.username || ""}
        </Typography>
        <Typography variant="subtitle1" style={{fontSize: theme.spacing(2)}}>
          {props?.position || ""}
        </Typography>
      </div>
    </div>
  );
};
