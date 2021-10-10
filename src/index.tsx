import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import {ThemeProvider} from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import {createTheme} from "@mui/material/styles";
import {ProfileRepository} from "./app/model/Repository";

const profile = ProfileRepository;

const theme = createTheme({
  palette: {
    ...profile.webLayoutConfigurations.themes.dark.palette,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
