import { Component, OnInit } from '@angular/core';
import { Project } from 'app/datamodel/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects = new Array<Project>();

  constructor() {
    this.projects.push(new Project());
    this.projects[0].name = 'Guianalyser';
    this.projects[0].companyName = 'Metafinanz';

    this.projects.push(new Project());
    this.projects[1].name = 'Guianalyser';
    this.projects[1].companyName = 'Metafinanz';

    this.projects.push(new Project());
    this.projects[2].name = 'Guianalyser';
    this.projects[2].companyName = 'Metafinanz';
  }

  ngOnInit() {
  }

}
