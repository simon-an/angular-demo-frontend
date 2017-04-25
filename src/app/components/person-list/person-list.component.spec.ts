import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { PersonCardComponent } from 'app/components/person-card/person-card.component';
import { UserService } from 'app/services/user.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { PersonListComponent } from './person-list.component';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonListComponent, PersonCardComponent],
      imports: [NgSemanticModule, FormsModule,
        ReactiveFormsModule],
      providers: [UserService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
