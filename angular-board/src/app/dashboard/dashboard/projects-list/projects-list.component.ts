import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects;
  }

  public onSearch(nameFilter: string) {
    this.projects = this.projectService.getProjectsByName(nameFilter);
  }

  public onDelete(id: number) {
    this.projectService.deleteProject(id);
    this.projects = this.projectService.getProjects;
  }
}
