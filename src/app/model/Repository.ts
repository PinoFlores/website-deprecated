import {Profile} from "./core/Profile";
import {Themes, WebLayoutConfigurations} from "./core/site/Configurations";
import _profile from "./profile.json";
import _layoutConfigs from "./layoutConfigs.json";

interface Repository {
  profile: Profile;
  layoutConfigs: WebLayoutConfigurations;
  themes: Themes;
}

let layoutConfigs: WebLayoutConfigurations = _layoutConfigs;

export const respository: Repository = {
  profile: _profile,
  layoutConfigs,
  themes: layoutConfigs.themes,
};
