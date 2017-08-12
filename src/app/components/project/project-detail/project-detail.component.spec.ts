import { ProjectTeam } from '../../../datamodel/project-team';
import { ProjectListComponent } from '../project-list/project-list.component';
import { RouterTestingModule  } from '@angular/router/testing';
import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { Project } from 'app/datamodel/project';
import { UserService } from 'app/services/user.service';
import { ProjectDetailComponent } from './project-detail.component';
import { MdCardModule } from '@angular/material';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        MdCardModule,
        RouterTestingModule.withRoutes(
        [{path: '', component: ProjectDetailComponent},
        // {path: 'simple', component: ProjectListComponent}
        ]
       )
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    component.project = new Project();
    component.project.projectTeam = new ProjectTeam();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
