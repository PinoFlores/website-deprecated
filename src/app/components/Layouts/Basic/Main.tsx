import {FunctionComponent, ReactNode} from "react";
import {Grid} from "@mui/material";
import {Responsive} from "../../../types";

interface Props {
  children: ReactNode;
  responsive?: Responsive;
}

export const MainContainer: FunctionComponent<Props> = (props) => {
  return (
    <Grid item xs={10} {...props?.responsive}>
      {props.children}
    </Grid>
  );
};
