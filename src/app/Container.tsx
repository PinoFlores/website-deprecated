import {ReactNode} from "react";

import {CssBaseline} from "@mui/material";
import {useTheme} from "./hooks/useTheme";
import {ThemeProvider} from "@mui/material/styles";

const AppContainer = (props: {children: ReactNode}) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default AppContainer;
