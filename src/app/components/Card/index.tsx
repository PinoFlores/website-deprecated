import React, {FunctionComponent, ReactNode} from "react";
import {Card as MUICard} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useStyles} from "./style";
import {useMediaQuery} from "../../hooks/useMediaQuery";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export const Card: FunctionComponent<Props> = ({children, style, className}) => {
  const theme = useTheme();
  const mq = useMediaQuery();
  const classes = useStyles({mq})();

  return (
    <MUICard variant="outlined" className={`${classes.root} ${className}`} style={style}>
      {children}
    </MUICard>
  );
};
