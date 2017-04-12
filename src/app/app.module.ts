import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';

import { UserService } from 'app/services/user.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { EducationComponent } from './components/education/education.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SkillsComponent } from './components/skills/skills.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContactApprovalComponent } from './components/notifications/contact-approval/contact-approval.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfGeneratorComponent,
    PersonDetailComponent,
    ProjectDetailComponent,
    EducationComponent,
    DocumentsComponent,
    SkillsComponent,
    PersonListComponent,
    UserProfileComponent,
    AboutComponent,
    AdminDashboardComponent,
    PersonCardComponent,
    ContactApprovalComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgSemanticModule,
    RouterModule.forRoot([
      {
        path: 'persons',
        component: PersonListComponent,
      },
      {
        path: 'pdf',
        component: PdfGeneratorComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'education',
        component: EducationComponent,
      },
      {
        path: 'documents',
        component: DocumentsComponent,
      },
      {
        path: 'projects',
        component: ProjectListComponent,
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },

    ]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
