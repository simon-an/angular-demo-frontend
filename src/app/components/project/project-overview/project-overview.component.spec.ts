import { inject, TestBed } from '@angular/core/testing';

import { ProjectOverviewComponent } from './project-overview.component';

describe('a project-overview component', () => {
	let component: ProjectOverviewComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProjectOverviewComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProjectOverviewComponent], ProjectOverviewComponent => {
		component = ProjectOverviewComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
