import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactApprovalComponent } from './contact-approval.component';

describe('ContactApprovalComponent', () => {
  let component: ContactApprovalComponent;
  let fixture: ComponentFixture<ContactApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
