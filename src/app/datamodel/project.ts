import { Job } from 'app/datamodel/job';
import { JobRole } from 'app/datamodel/job-role';
import { Person } from 'app/datamodel/person';
import { ProjectTeam } from 'app/datamodel/project-team';
import { Skill } from 'app/datamodel/skill';

export class Project {

    people: Array<Person>;
    name: string;
    companyName: string;
    companyEmployment: Job;
    duration: any;
    skillsUsed: Array<Skill>;
    jobRoles: Array<JobRole>;
    projectTeam: ProjectTeam;
    intern: boolean;

}
