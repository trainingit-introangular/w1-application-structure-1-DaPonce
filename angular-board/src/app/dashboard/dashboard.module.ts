import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './dashboard/projects-list/projects-list.component';
import { FormsModule } from '@angular/forms';
import { EditorProjectFormComponent } from './dashboard/editor-project/editor-project-form/editor-project-form.component';
import { NewProjectFormComponent } from './dashboard/new-project/new-project-form/new-project-form.component';
import { EditorProjectComponent } from './dashboard/editor-project/editor-project.component';
import { NewProjectComponent } from './dashboard/new-project/new-project.component';
import { FilterProjectsFormComponent } from './dashboard/projects-list/filter-projects-form/filter-projects-form.component';
import { ProjectsService } from '../projects.service';
import { ProjectInterceptorService } from '../project-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [FilterProjectsFormComponent, DashboardComponent, ProjectsListComponent,
     EditorProjectFormComponent, NewProjectFormComponent, EditorProjectComponent, NewProjectComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  providers: [
    ProjectsService
  ]
})
export class DashboardModule { }
