import { ProjectMember } from './project-member';
import { ProjectMembership } from './project-membership';
import { ProjectRole } from './project-role';
export class ProjectTeam {

    team: ProjectMember[];
    layout: ProjectRole[];

    isLayoutCompleteToday(): boolean { return false; }

    isLayoutComplete(date: Date): boolean { return false; }
}
