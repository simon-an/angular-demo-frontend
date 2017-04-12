import { Education } from 'app/datamodel/education';
import { Job } from 'app/datamodel/job';
import { JobRole } from 'app/datamodel/job-role';
import { Project } from 'app/datamodel/project';
import { ProjectMembership } from 'app/datamodel/project-membership';
import { ProjectRole } from 'app/datamodel/project-role';
import { TrainedSkill } from 'app/datamodel/trained-skill';

export class Consultant {
    //
    jobRoles: JobRole[];
    projectRoles: ProjectRole[];
    primaryJobRole: JobRole;
    preferedProjectRoles: ProjectRole[];

    //
    currentJob: Job;
    jobHistory: Job[];
    //
    currentTeam: string;
    currentProject: Project;
    //
    certificates: any;
    experience: ProjectMembership[];
    education: Education[];
    trainedSlills: TrainedSkill[];
}
