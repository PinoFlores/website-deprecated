import {Theme, alpha} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles";
import {MediaQuery} from "../../hooks/useMediaQuery";

interface Props {
  src: string;
  mq: MediaQuery;
}
export const useStyles = (props: Props) =>
  makeStyles((theme: Theme) =>
    createStyles({
      HeaderContainer: {
        borderTop: "none !important",
        borderTopRightRadius: `${0} !important`,
        borderTopLeftRadius: `${0} !important`,
        borderBottomRightRadius: `${props.mq.isExtraSmallDevice ? 0 : theme.spacing(1)} !important`,
        borderBottomLeftRadius: `${props.mq.isExtraSmallDevice ? 0 : theme.spacing(1)} !important`,
        padding: `0 !important`,
      },
      headerBgContainer: {
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
        borderTopRightRadius: `${0} !important`,
        borderTopLeftRadius: `${0} !important`,
        borderBottomRightRadius: `${props.mq.isExtraSmallDevice ? 0 : theme.spacing(1)} !important`,
        borderBottomLeftRadius: `${props.mq.isExtraSmallDevice ? 0 : theme.spacing(1)} !important`,
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
