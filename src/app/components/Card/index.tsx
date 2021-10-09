import {FunctionComponent, ReactNode} from "react";
import {Card as MUICard} from "@mui/material";
import {useTheme} from "../../hooks/useTheme";

export const Card: FunctionComponent<{children: ReactNode}> = ({children}) => {
  const theme = useTheme();
  return (
    <MUICard variant="outlined" style={{padding: "1rem", borderRadius: theme.spacing(1)}}>
      {children}
    </MUICard>
  );
};
