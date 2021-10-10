import React, {FunctionComponent, ReactNode} from "react";
import {Card as MUICard} from "@mui/material";
import {useTheme} from "@mui/material/styles";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}
export const Card: FunctionComponent<Props> = ({children, style}) => {
  const theme = useTheme();
  return (
    <MUICard variant="outlined" style={{padding: "1rem", borderRadius: theme.spacing(1), ...style}}>
      {children}
    </MUICard>
  );
};
