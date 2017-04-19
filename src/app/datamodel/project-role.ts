import { Skill } from './skill';
import { TrainedSkill } from './trained-skill';
export class ProjectRole {

    name: string;
    neededSkills: TrainedSkill[];// skill + können
    freeStyle: boolean;
    roleId: number;
    preferedCertifications: string[]; //nameOrId;
}
