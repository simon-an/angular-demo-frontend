import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { UserService } from 'app/services/user.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { PersonDetailComponent } from './person-detail.component';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonDetailComponent],
      imports: [NgSemanticModule, FormsModule,
        ReactiveFormsModule],
      providers: [UserService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
