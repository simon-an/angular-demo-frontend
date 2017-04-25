import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { Project } from 'app/datamodel/project';
import { UserService } from 'app/services/user.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { ProjectDetailComponent } from './project-detail.component';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailComponent],
      imports: [NgSemanticModule, FormsModule,
        ReactiveFormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    component.project = new Project();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
