import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'app/datamodel/project';
import { ProjectTeam } from 'app/datamodel/project-team';

@Component({
    selector: 'knowledge-project-card',
    templateUrl: 'project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {

    @Input()
    project: Project;
    projectTeam: ProjectTeam;

    constructor() {
        //
    }

    ngOnInit(): void {
        this.projectTeam = this.project.projectTeam;
    }

}
