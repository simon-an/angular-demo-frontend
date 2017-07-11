import { identifierModuleUrl } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from 'app/datamodel/person';
import { Project } from 'app/datamodel/project';

@Component({
	selector: 'project-overview',
	templateUrl: 'project-overview.component.html',
	styleUrls: ['./project-overview.component.scss']
})

export class ProjectOverviewComponent implements OnInit {

	project = new Project();

	constructor() {
		this.project.name = '';
		this.project.companyName = '';
		this.project.people = new Array<Person>();
		this.project.people.push(new Person());
		this.project.people[0].firstName = 'Simon';
		this.project.people[0].lastName = 'NoName';
		this.project.people.push(new Person());
		this.project.people[1].firstName = 'XXX';
		this.project.people[1].lastName = 'YYY';
	}

	ngOnInit() {

	}

	public personAdded(id: string): void {
		console.log('person added', id);
		this.project.people.push(new Person());
		this.project.people[this.project.people.length - 1].firstName = 'XXX';
		this.project.people[this.project.people.length - 1].lastName = 'YYY';
	}
}
