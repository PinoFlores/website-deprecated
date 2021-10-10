import {Alert, Typography} from "@mui/material";
import {FunctionComponent} from "react";
import {Card} from "../../components/Card";
import {useTheme} from "@mui/material/styles";

export const BlogView: FunctionComponent<any> = () => {
  const {palette} = useTheme();
  return (
    <Card>
      <Alert severity="warning" icon={false}>
        <Typography style={{color: palette.warning.main}}>Coming soon</Typography>
      </Alert>
    </Card>
  );
};
