import {Theme} from "@mui/material";

export const styles = (theme: Theme) => {
  return {
    HeaderContainer: {
      border: "none !important",
      borderTopRightRadius: `${0} !important`,
      borderTopLeftRadius: `${0} !important`,
      borderBottomRightRadius: `${theme.spacing(1)} !important`,
      borderBottomLeftRadius: `${theme.spacing(1)} !important`,
    },
    headerBgContainer: {
      height: "9rem",
      background: theme.palette.grey[700],
    },
    userInfoContainer: {
      padding: "0 2rem",
      // height: "15rem",
      borderTop: "none !important",
      border: `1px solid ${theme.palette.divider} !important`,
      borderTopRightRadius: `${0} !important`,
      borderTopLeftRadius: `${0} !important`,
      borderBottomRightRadius: `${theme.spacing(1)} !important`,
      borderBottomLeftRadius: `${theme.spacing(1)} !important`,
    },
  };
};
