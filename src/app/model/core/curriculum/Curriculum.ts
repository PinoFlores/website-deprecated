import {Education} from "./Education";
import {Job} from "./Job";
import {Skill} from "./Skill";

export interface Curriculum {
  about: string;
  educations: Array<Education>;
  skills: Array<Skill>;
  experience: Array<Job>;
}
