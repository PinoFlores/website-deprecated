import React from "react";

import {Box} from "@mui/material";
import {useStyles} from "./styles";
import {withTheme} from "@mui/styles";
import BasicLayout from "./components/Layouts/Basic";
import "./index.sass";

const App = (props: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <BasicLayout />
    </Box>
  );
};

export default withTheme(App);
