import {Blog} from "./blog/Blog";
import {Contact} from "./Contact";
import {Curriculum} from "./curriculum/Curriculum";
import {Portfolio} from "./portfolio/Portfolio";
import {WebLayoutConfigurations} from "./site/Configurations";

export interface Profile {
  username: string;
  position: string;
  src: string;
  contacts: Array<Contact>;
  curriculum: Curriculum;
  portfolio: Portfolio;
  blog: Blog;
}
