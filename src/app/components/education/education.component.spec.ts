import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { UserService } from 'app/services/user.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponent],
      imports: [NgSemanticModule, FormsModule,
        ReactiveFormsModule],
      providers: [UserService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
