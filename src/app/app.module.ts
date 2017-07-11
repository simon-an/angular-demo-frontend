import { DocumentsComponent } from './components/documents/documents.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { TagsService } from 'app/services/stackexchange/tags.service';
import { UserService } from 'app/services/user.service';
import { WebsocketService } from 'app/services/websocket.service';
import { SuiModule } from 'ng2-semantic-ui'
import { AppComponent, HighlightDirective } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './components/education/education.component';
import { ContactApprovalComponent } from './components/notifications/contact-approval/contact-approval.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { PersonCardComponent } from './components/person/person-card/person-card.component';
import { PersonDetailComponent } from './components/person/person-detail/person-detail.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { WebsocketComponent } from './components/sample-components/websocket/websocket.component';
import { SkillsComponent } from './components/skills/skills.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ConfigClickHandlerDirective } from './configClickHandlerDirective';

import { MaterialModule, MdButtonModule, MdCheckboxModule, MdCoreModule, MdDatepickerModule, MdGridListModule, MdIconModule, MdListModule } from '@angular/material';
import { ProjectOverviewComponent } from './components/project/project-overview/project-overview.component';
import { CdkTableModule } from '@angular/cdk';
import { PersonDragListComponent } from './components/person/person-drag-list/person-drag-list.component';

@NgModule({
  imports: [MdIconModule, MdButtonModule, MdCheckboxModule, MdCoreModule, MdDatepickerModule, MdGridListModule, MdListModule, MaterialModule, CdkTableModule],
  exports: [MdIconModule, MdButtonModule, MdCheckboxModule, MdCoreModule, MdDatepickerModule, MdGridListModule, MdListModule, MaterialModule, CdkTableModule]
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
    ProjectOverviewComponent,
    WebsocketComponent,
    HighlightDirective,
    ConfigClickHandlerDirective,
    PersonDragListComponent
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
        component: PersonListComponent
      },
      {
        path: 'pdf',
        component: PdfGeneratorComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: 'projects',
        component: ProjectListComponent
      },
      {
        path: 'project',
        component: ProjectOverviewComponent
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent
      }

    ])
  ],
  providers: [UserService, WebsocketService, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
