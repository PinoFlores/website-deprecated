import React, {ReactNode} from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import {ThemeProvider, Theme, PaletteMode} from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import {createTheme} from "@mui/material/styles";
import {Themes} from "./app/model/Repository";

const themes = Themes;

export const ColorModeContext = React.createContext({toggleColorMode: () => {}});

interface Props {
  children: ReactNode;
}

const ThemeSwitcher = (props: Props) => {
  const defautTheme = createTheme({palette: {...themes.dark.palette}});
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  const theme = React.useMemo<Theme>(() => {
    const newPalette = mode === "dark" ? themes.dark.palette : themes.light.palette;
    return createTheme({
      palette: {
        mode,
        ...newPalette,
      },
    });
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{toggleColorMode}}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcher>
      <App />
    </ThemeSwitcher>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
