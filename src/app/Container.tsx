import {ReactNode} from "react";

import {CssBaseline, ThemeProvider} from "@mui/material";
import {ThemeProvider as CustomThemeProvoder} from "./providers/themeProvider";
import {Themes} from "./model/core/site/Configurations";
import {ProfileRepository} from "./model/Repository";

import {createTheme} from "@mui/material/styles";

const profile = ProfileRepository;

const theme = createTheme({
  palette: {
    ...profile.webLayoutConfigurations.themes.dark.palette,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const AppContainer = (props: {children: ReactNode; themes: Themes}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default AppContainer;
