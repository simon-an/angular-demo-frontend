import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'app/datamodel/project';
import { ProjectTeam } from '../../datamodel/project-team';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {

  @Input()
  project: Project;
  projectTeam: ProjectTeam;

  constructor() { }

  ngOnInit() {
    this.projectTeam = this.project.projectTeam;
  }

}
