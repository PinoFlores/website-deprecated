import React, {ReactNode} from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import {ThemeProvider, Theme, PaletteMode} from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import {createTheme} from "@mui/material/styles";

import {DataProvider} from "./app/providers/DataProvider";
import {useData} from "./app/hooks/useData";

interface ContextProps {
  toggleColorMode: () => void;
  mode: PaletteMode;
}
export const ColorModeContext = React.createContext({} as ContextProps);

interface Props {
  children: ReactNode;
}

const ThemeSwitcher = (props: Props) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const {themes} = useData();

  const theme = React.useMemo<Theme>(() => {
    const newPalette = mode === "dark" ? themes.dark.palette : themes.light.palette;
    return createTheme({
      palette: {
        mode,
        ...newPalette,
      },
    });
  }, [mode]);

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  const value = React.useMemo<ContextProps>(
    () => ({
      toggleColorMode,
      mode,
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ThemeSwitcher>
        <App />
      </ThemeSwitcher>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
