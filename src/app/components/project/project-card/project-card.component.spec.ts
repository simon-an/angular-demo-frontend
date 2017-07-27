import { inject, TestBed } from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';

describe('a project-card component', () => {
    let component: ProjectCardComponent;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProjectCardComponent
            ]
        });
    });

    // instantiation through framework injection
    beforeEach(inject([ProjectCardComponent], ProjectCardComponent => {
        component = ProjectCardComponent;
    }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
