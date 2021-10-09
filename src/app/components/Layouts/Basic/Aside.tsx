import {FunctionComponent, ReactNode} from "react";
import {Grid} from "@mui/material";

export const AsideContainer: FunctionComponent<{children: ReactNode}> = ({children}) => {
  return (
    <Grid item xs={3}>
      {children}
    </Grid>
  );
};
