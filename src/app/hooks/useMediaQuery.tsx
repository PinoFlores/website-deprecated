import {useMediaQuery as useMQ} from "@mui/material";
import json2mq from "json2mq";

const LAYOUT = {
  EXTRA_SMALL_DEVICES: json2mq({
    maxWidth: 600,
  }),
  SMALL_DEVICES: json2mq({
    minWidth: 600.98,
    maxWidth: 900,
  }),
  MEDIUM_DEVICES: json2mq({
    minWidth: 900.98,
    maxWidth: 1200,
  }),
  LARGE_DEVICES: json2mq({
    minWidth: 1200.98,
    maxWidth: 1536,
  }),
  EXTRA_LARGE_DEVICES: json2mq({
    minWidth: 1536.98,
  }),
};

export interface MediaQuery {
  isExtraSmallDevice: boolean;
  isSmallDevice: boolean;
  isMediumDevice: boolean;
  isLargeDevice: boolean;
  isExtraLargeDevice: boolean;
  getScreen: () => "xs" | "sm" | "md" | "ld" | "xl";
}

export const useMediaQuery = (): MediaQuery => {
  const xsmd = useMQ(LAYOUT.EXTRA_SMALL_DEVICES);
  const smd = useMQ(LAYOUT.SMALL_DEVICES);
  const md = useMQ(LAYOUT.MEDIUM_DEVICES);
  const ld = useMQ(LAYOUT.LARGE_DEVICES);
  const xld = useMQ(LAYOUT.EXTRA_LARGE_DEVICES);

  const getScreen = () => {
    if (xsmd) return "xs";
    else if (smd) return "sm";
    else if (ld) return "ld";
    else if (xld) return "xl";
    return "md";
  };

  return {
    isExtraSmallDevice: xsmd,
    isSmallDevice: smd,
    isMediumDevice: md,
    isLargeDevice: ld,
    isExtraLargeDevice: xld,
    getScreen,
  };
};
