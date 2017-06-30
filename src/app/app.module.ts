import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TagsService } from 'app/services/stackexchange/tags.service';
import { UserService } from 'app/services/user.service';
import { WebsocketService } from 'app/services/websocket.service';
import { SuiModule } from 'ng2-semantic-ui'
import { AppComponent, HighlightDirective } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { EducationComponent } from './components/education/education.component';
import { ContactApprovalComponent } from './components/notifications/contact-approval/contact-approval.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { WebsocketComponent } from './components/sample-components/websocket/websocket.component';
import { SkillsComponent } from './components/skills/skills.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ConfigClickHandlerDirective } from './configClickHandlerDirective';

import { MdButtonModule, MdCheckboxModule, MdCoreModule, MdDatepickerModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdCoreModule, MdDatepickerModule],
  exports: [MdButtonModule, MdCheckboxModule, MdCoreModule, MdDatepickerModule],
})
export class MyOwnCustomMaterialModule { }

// tslint:disable-next-line:max-classes-per-file
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
    WebsocketComponent,
    HighlightDirective,
    ConfigClickHandlerDirective,
  ],
  imports: [
    MyOwnCustomMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SuiModule,
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
  providers: [UserService, WebsocketService, TagsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
