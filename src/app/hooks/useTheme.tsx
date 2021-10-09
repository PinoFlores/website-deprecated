import {createTheme} from "@mui/material/styles";

type themeType = "light" | "dark";

export const useTheme = (type: themeType = "light") => {
  return createTheme({
    palette: {
      primary: {
        main: "#1877f2",
      },
      background: {
        default: "#F2F5F8",
        paper: "#FFF",
      },
    },
  });
};
