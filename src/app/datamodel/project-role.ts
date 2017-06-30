import { Skill } from './skill';
import { TrainedSkill } from './trained-skill';
export class ProjectRole {

    name: string;
    neededSkills: Array<TrainedSkill>; // skill + können
    freeStyle: boolean;
    roleId: number;
    preferedCertifications: Array<string>; // nameOrId;
}
