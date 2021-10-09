import {Theme} from "@mui/material";

export const styles = (theme: Theme) => {
  console.log(theme.palette.background);

  return {
    root: {
      background: theme.palette.background.default,
    },
  };
};
