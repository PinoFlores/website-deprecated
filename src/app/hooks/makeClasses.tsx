import {Theme} from "@mui/material";
import {useTheme} from "../hooks/useTheme";
import {makeStyles, StyleRules} from "@mui/styles";

export const useStyles = (rules: StyleRules) => makeStyles(() => rules);

type Rules = (theme: Theme) => StyleRules;

/**
 * New MUI makeStyles Adapter
 * @param {StyleRules} rules
 * @returns {StyleRules}
 */
export const useMakeClasses = (rules: Rules) => {
  const theme = useTheme();
  console.log(theme.palette.background);

  return useStyles(rules(theme))();
};
