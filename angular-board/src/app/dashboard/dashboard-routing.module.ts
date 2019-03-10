import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './dashboard/projects-list/projects-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProjectComponent } from './dashboard/new-project/new-project.component';
import { EditorProjectComponent } from './dashboard/editor-project/editor-project.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ProjectsListComponent
      },
      {
        path: 'new-project',
        component: NewProjectComponent
      },
      {
        path: ':id',
        component: EditorProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
