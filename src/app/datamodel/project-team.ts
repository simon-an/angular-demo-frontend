import { ProjectMember } from './project-member';
import { ProjectMembership } from './project-membership';
import { ProjectRole } from './project-role';
export class ProjectTeam {

    team: Array<ProjectMember>;
    layout: Array<ProjectRole>;
    teamHistory: Array<ProjectMember>;

    isLayoutCompleteToday(): boolean { return false; }

    isLayoutComplete(date: Date): boolean { return false; }
}
