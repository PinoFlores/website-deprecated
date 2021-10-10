import {Theme, alpha} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles";
import {MediaQuery} from "../../hooks/useMediaQuery";

interface Props {
  mq: MediaQuery;
}
export const useStyles = (props: Props) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        padding: "1rem",
        borderRadius: `${props.mq.isExtraSmallDevice ? 0 : theme.spacing(1)} !important`,
        borderLeftWidth: `${props.mq.isExtraSmallDevice ? 0 : "1px"} !important`,
        borderRightWidth: `${props.mq.isExtraSmallDevice ? 0 : "1px"} !important`,
      },
    })
  );
