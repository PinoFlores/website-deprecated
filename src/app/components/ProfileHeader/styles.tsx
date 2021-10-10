import {Theme, alpha} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles";

export const useStyles = (src: string) =>
  makeStyles((theme: Theme) =>
    createStyles({
      HeaderContainer: {
        borderTop: "none !important",
        borderTopRightRadius: `${0} !important`,
        borderTopLeftRadius: `${0} !important`,
        borderBottomRightRadius: `${theme.spacing(1)} !important`,
        borderBottomLeftRadius: `${theme.spacing(1)} !important`,
      },
      headerBgContainer: {
        height: "9rem",
        background: theme.palette.common.black,
        backgroundImage: `url(${src})`,
      },
      topActions: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      },
      userInfoContainer: {
        padding: "0 2rem",
        border: "none !important",
        borderTop: "none !important",
        borderTopRightRadius: `${0} !important`,
        borderTopLeftRadius: `${0} !important`,
        borderBottomRightRadius: `${theme.spacing(1)} !important`,
        borderBottomLeftRadius: `${theme.spacing(1)} !important`,
      },
      light: {
        color: theme.palette.common.white,
      },
      themeSwitcher: {
        backgroundColor: `${alpha(theme.palette.primary.light, 0.3)} !important`,
      },
      dark: {
        color: theme.palette.common.white,
      },
    })
  );
