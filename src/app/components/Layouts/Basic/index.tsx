import React, {FunctionComponent} from "react";
import {Card} from "@mui/material";
import {BasicLayoutProps} from "./types";

const BasicLayout: FunctionComponent<BasicLayoutProps> = (props) => {
  return (
    <Card variant="outlined" style={{padding: "2rem"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maxime debitis dolorem
      similique corrupti ab rem dignissimos deleniti consequatur enim maiores nobis aperiam? Illum
      soluta accusamus delectus natus sit ut.
    </Card>
  );
};

export default BasicLayout;
