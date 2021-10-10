import React from "react";
import {Box, Theme} from "@mui/material";

import BasicLayout from "./components/Layouts/Basic";
import {withTheme, makeStyles, createStyles} from "@mui/styles";
import "./index.sass";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.error.dark,
    },
  })
);

const App = (props: any) => {
  const classes = useStyles();

  return (
    <Box style={{height: "100%"}}>
      <BasicLayout />
    </Box>
  );
};

export default withTheme(App);
