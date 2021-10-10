import {Theme} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "auto",
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
  })
);
