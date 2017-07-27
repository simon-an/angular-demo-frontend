import { Job } from 'app/datamodel/job';
import { JobRole } from 'app/datamodel/job-role';
import { Person } from 'app/datamodel/person';
import { ProjectTeam } from 'app/datamodel/project-team';
import { Skill } from 'app/datamodel/skill';
import { Period } from 'app/datamodel/period';

export class Project {

    // ?
    name: string;
    companyName: string;
    companyEmployment: Job;
    duration: Period;
    intern: boolean;
    //
    people: Array<Person>;
    skillsUsed: Array<Skill>;
    jobRoles: Array<JobRole>;
    projectTeam: ProjectTeam;

}
