import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Person } from 'app/datamodel/person';
import { UserService } from 'app/services/user.service';
import { PersonCardComponent } from './person-card.component';

describe('PersonCardComponent', () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonCardComponent],
      providers: [UserService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    component.person = new Person();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
