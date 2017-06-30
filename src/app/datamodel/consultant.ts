import { Education } from 'app/datamodel/education';
import { Job } from 'app/datamodel/job';
import { JobRole } from 'app/datamodel/job-role';
import { Project } from 'app/datamodel/project';
import { ProjectMembership } from 'app/datamodel/project-membership';
import { ProjectRole } from 'app/datamodel/project-role';
import { TrainedSkill } from 'app/datamodel/trained-skill';

export class Consultant {
    //
    jobRoles: Array<JobRole>;
    projectRoles: Array<ProjectRole>;
    primaryJobRole: JobRole;
    preferedProjectRoles: Array<ProjectRole>;

    //
    currentJob: Job;
    jobHistory: Array<Job>;
    //
    currentTeam: string;
    currentProject: Project;
    //
    certificates: any;
    experience: Array<ProjectMembership>;
    education: Array<Education>;
    trainedSlills: Array<TrainedSkill>;
}
