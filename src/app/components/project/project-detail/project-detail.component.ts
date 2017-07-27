import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'app/datamodel/project';
import { ProjectTeam } from 'app/datamodel/project-team';

@Component({
  selector: 'knowledge-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

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
