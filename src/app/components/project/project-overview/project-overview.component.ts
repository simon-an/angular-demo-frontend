import { identifierModuleUrl } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from 'app/datamodel/person';
import { Project } from 'app/datamodel/project';
import { ProjectTeam } from 'app/datamodel/project-team';
import { ProjectMember } from 'app/datamodel/project-member';
import { ProjectRole } from 'app/datamodel/project-role';
import { Consultant } from 'app/datamodel/consultant';
import { Job } from 'app/datamodel/job';
import { TrainedSkill } from 'app/datamodel/trained-skill';
import { Skill } from 'app/datamodel/skill';

@Component({
    selector: 'knowledge-project-overview',
    templateUrl: 'project-overview.component.html',
    styleUrls: ['./project-overview.component.scss']
})

export class ProjectOverviewComponent implements OnInit {

    project: Project = new Project();

    constructor() {
        this.project.name = 'MyProject';
        this.project.companyName = 'MyCompany';
        this.project.people = new Array<Person>();
        this.project.people.push(new Person());
        this.project.people[0].firstName = 'Simon';
        this.project.people[0].lastName = 'NoName';
        this.project.people.push(new Person());
        this.project.people[1].firstName = 'XXX';
        this.project.people[1].lastName = 'YYY';

        const pt = new ProjectTeam();
        this.project.projectTeam = pt;
        pt.layout = new Array<ProjectRole>();
        pt.layout.push(new ProjectRole());
        pt.layout[0].name = 'Angular Programmer';
        pt.layout[0].neededSkills = new Array<TrainedSkill>();
        pt.layout[0].neededSkills.push(new TrainedSkill());
        pt.layout[0].neededSkills[0].skill = new Skill('Javascript');

        pt.team = new Array<ProjectMember>();
        pt.team.push(new ProjectMember());
        pt.team[0].consultat = new Consultant();
        pt.team[0].consultat.currentJob = new Job();
        pt.teamHistory = new Array<ProjectMember>();
    }

    ngOnInit(): void {
        //
    }

    public personAdded(id: string): void {
        console.log('person added', id);
        this.project.people.push(new Person());
        this.project.people[this.project.people.length - 1].firstName = 'XXX';
        this.project.people[this.project.people.length - 1].lastName = 'YYY';
    }
}
