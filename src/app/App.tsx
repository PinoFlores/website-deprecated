import React from "react";
import {Box, Theme} from "@mui/material";

import BasicLayout from "./components/Layouts/Basic";
import {withTheme, makeStyles, createStyles} from "@mui/styles";
import "./index.sass";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "auto",
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
  })
);

const App = (props: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <BasicLayout />
    </Box>
  );
};

export default withTheme(App);
