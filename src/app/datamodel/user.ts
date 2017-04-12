
import { Company } from 'app/datamodel/company';
import { Education } from 'app/datamodel/education';
import { Job } from 'app/datamodel/job';
import { JobRole } from 'app/datamodel/job-role';
import { Person } from 'app/datamodel/person';
import { Project } from 'app/datamodel/project';
import { Skill } from 'app/datamodel/skill';
import { TrainedSkill } from 'app/datamodel/trained-skill';

export class User extends Person {
    rating: number;
    profileImage: string;
    suggestedSkills: string[];
    contributions: any;
    logins: number;
    premiumUser: boolean;
    xingProfile: string;
    faceBookProfile: string;


    // do we assign skills directly?
    skills: Skill[];

}
