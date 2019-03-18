import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];
  public projects$: Observable<Project[]> = null;
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects$();
    // this.projectService.getProjects$();
  }

  public onSearch(nameFilter: string) {
    this.projects = this.projectService.getProjectsByName(nameFilter);
  }

  public onDelete(id: number) {
    this.projectService.deleteProject(id);
    this.projects = this.projectService.getProjects;
    // this.projects = [...this.projectService.getProjects()];
  }
}
