import {FunctionComponent, ReactNode} from "react";
import {Grid} from "@mui/material";

export const MainContainer: FunctionComponent<{children: ReactNode}> = ({children}) => {
  return (
    <Grid item xl={10}>
      {children}
    </Grid>
  );
};
