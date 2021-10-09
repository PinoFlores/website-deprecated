import React from "react";
import {Box} from "@mui/material";

import AppContainer from "./Container";
import {useMakeClasses} from "./hooks/makeClasses";
import BasicLayout from "./components/Layouts/Basic";
import {styles} from "./styles";
import "./index.sass";

const App = (props: any) => {
  const classes = useMakeClasses(styles);

  return (
    <AppContainer>
      <Box className={classes.root} style={{height: "100%"}}>
        <BasicLayout />
      </Box>
    </AppContainer>
  );
};

export default App;
