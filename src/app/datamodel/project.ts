import { Job } from 'app/datamodel/job';
import { JobRole } from 'app/datamodel/job-role';
import { Person } from 'app/datamodel/person';
import { ProjectTeam } from 'app/datamodel/project-team';
import { Skill } from 'app/datamodel/skill';

export class Project {

    people: Person[];
    name: string;
    companyName: string;
    companyEmployment: Job;
    duration: any;
    skillsUsed: Skill[];
    jobRoles: JobRole[];
    projectTeam: ProjectTeam;
    intern: boolean;

}
