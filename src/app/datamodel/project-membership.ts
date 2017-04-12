import { Period } from 'app/datamodel/period';
import { Project } from 'app/datamodel/project';
import { ProjectRole } from 'app/datamodel/project-role';

export class ProjectMembership {

    project: Project;

    roles = {
        projectRole: ProjectRole,
        duration: Period,
    }

}
