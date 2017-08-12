import { ProjectCardComponent } from '../project-card/project-card.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { ProjectDetailComponent } from 'app/components/project/project-detail/project-detail.component';
import { UserService } from 'app/services/user.service';
import { ProjectListComponent } from './project-list.component';
import { RouterTestingModule  } from '@angular/router/testing';
import { MdCardModule } from '@angular/material';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectListComponent, ProjectDetailComponent, ProjectCardComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
         MdCardModule,
        RouterTestingModule.withRoutes(
        [{path: '', component: ProjectListComponent},
        // {path: 'simple', component: ProjectListComponent}
        ]),
      ],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
