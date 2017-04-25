import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from 'app/services/user.service';
import { PdfGeneratorComponent } from './pdf-generator.component';

describe('PdfGeneratorComponent', () => {
  let component: PdfGeneratorComponent;
  let fixture: ComponentFixture<PdfGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PdfGeneratorComponent],
      providers: [UserService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
