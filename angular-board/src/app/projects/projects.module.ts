import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { EditorProjectComponent } from './editor-project/editor-project.component';
import { NewProjectComponent } from './new-project/new-project.component';

@NgModule({
  declarations: [ProjectsComponent, EditorProjectComponent, NewProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
