import {Theme, alpha} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles";
import {MediaQuery} from "../../../hooks/useMediaQuery";

interface Props {
  mq: MediaQuery;
}

<br />;
export const useStyles = (props: Props) =>
  makeStyles((theme: Theme) => {
    const isDevice =
      props.mq.isExtraSmallDevice || props.mq.isSmallDevice || props.mq.isMediumDevice;

    return createStyles({
      HeaderContainer: {
        borderRadius: 0,
        borderTop: "none !important",
        padding: `0 !important`,
      },
      headerBgContainer: {
        borderRadius: 0,
        borderTopRightRadius: `0 !important`,
        height: "9rem",
        background: theme.palette.common.black,
      },
      topActions: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      },
      userInfoContainer: {
        padding: "0 1.3rem",
        border: "none !important",
        borderTop: "none !important",
      },
      light: {
        fontSize: "20px !important",
        color: theme.palette.text.primary,
      },
      linkedinBtn: {
        color: `${theme.palette.common.white} !important`,
      },
      themeSwitcher: {
        padding: "5px !important",
        border: `1px solid ${alpha(theme.palette.text.primary, 0.7)} !important`,
      },
      dark: {
        fontSize: "20px !important",
        color: theme.palette.text.primary,
      },
    });
  });
