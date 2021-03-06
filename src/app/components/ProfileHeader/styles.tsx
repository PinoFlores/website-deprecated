import {Theme, alpha} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles";
import {MediaQuery} from "../../hooks/useMediaQuery";

interface Props {
  src: string;
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
        backgroundImage: `url(${props.src})`,
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
        color: theme.palette.common.white,
      },
      linkedinBtn: {
        color: `${theme.palette.common.white} !important`,
      },
      themeSwitcher: {
        border: `1px solid ${alpha(theme.palette.common.white, 0.7)} !important`,
      },
      dark: {
        color: theme.palette.common.white,
      },
    });
  });
