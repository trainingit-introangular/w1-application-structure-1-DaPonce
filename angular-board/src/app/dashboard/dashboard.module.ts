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

@NgModule({
  declarations: [FilterProjectsFormComponent, DashboardComponent, ProjectsListComponent,
     EditorProjectFormComponent, NewProjectFormComponent, EditorProjectComponent, NewProjectComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
