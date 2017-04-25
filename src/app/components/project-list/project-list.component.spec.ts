import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { ProjectDetailComponent } from 'app/components/project-detail/project-detail.component';
import { UserService } from 'app/services/user.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { ProjectListComponent } from './project-list.component';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectListComponent, ProjectDetailComponent],
      imports: [NgSemanticModule, FormsModule,
        ReactiveFormsModule],
      providers: [UserService],
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
