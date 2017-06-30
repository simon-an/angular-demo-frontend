import { async, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'app/services/user.service';
import { AppComponent } from './app.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { SuiModule } from 'ng2-semantic-ui';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, PdfGeneratorComponent
      ],
      providers: [UserService],
      imports: [RouterModule,
        SuiModule,
        RouterTestingModule.withRoutes(
          [])] // { path: '', component: BlankCmp }, { path: 'simple', component: SimpleCmp }
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Welcome to my App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to my App');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my App');
  }));

});
