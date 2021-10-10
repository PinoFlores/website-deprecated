import {useTheme} from "../hooks/useTheme";
import {makeStyles, StyleRules} from "@mui/styles";
import {Theme} from "../model/core/theme";

export const useStyles = (rules: StyleRules) => makeStyles(() => rules);

type Rules = (theme: Theme) => StyleRules;

/**
 * New MUI makeStyles Adapter
 * @param {StyleRules} rules
 * @returns {StyleRules}
 */
export const useMakeClasses = (rules: Rules) => {
  const {theme} = useTheme();
  return useStyles(rules(theme))();
};
