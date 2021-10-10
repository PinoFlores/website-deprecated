import React, {FunctionComponent} from "react";

import {IconButton, alpha, useTheme} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ConstructionIcon from "@mui/icons-material/Construction";

type StatusIconProps = {
  status?: string;
};
export const StatusIcon: FunctionComponent<StatusIconProps> = (props) => {
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
