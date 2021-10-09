import {CurriculumView} from "./Curriculum";
import {PortfolioView} from "./Portfolio";
import {BlogView} from "./Blog";

export const views = [
  {
    index: 0,
    name: "Curriculum",
    Component: CurriculumView,
  },
  {
    index: 1,
    name: "Portfolio",
    Component: PortfolioView,
  },
  {
    index: 2,
    name: "Blog",
    Component: BlogView,
  },
];
