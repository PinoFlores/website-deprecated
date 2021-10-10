import {AvatarProps} from "./types";
import {Avatar as MUIAvatar, Paper} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export const Avatar = (props: AvatarProps) => {
  const theme = useTheme();

  return (
    <Paper
      style={{
        padding: "2px",
        borderRadius: "100%",
        border: `2px solid ${props?.borderColor || theme.palette.primary.main}`,
        ...props?.style,
      }}
    >
      <MUIAvatar
        alt="Remy Sharp"
        src={props?.src || ""}
        sx={{width: props?.size || "7rem", height: props?.size || "7rem"}}
      />
    </Paper>
  );
};
