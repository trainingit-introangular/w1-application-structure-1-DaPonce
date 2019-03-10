import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './dashboard/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public getProjects = environment.projects;

  constructor() {}

  public getProjectsByName(nameFilter: string): Project[] {
    if (nameFilter !== '') {
      return environment.projects.filter(p => p.name.toUpperCase() === nameFilter.toUpperCase());
    } else {
      return this.getProjects;
    }
  }

  public getProjectById(id: number): Project {
    return environment.projects.filter(p => p.id == id)[0];
  }

  public addProject(name: string) {
    let newProject: Project;
    newProject = {
      id: environment.projects.length,
      name
    };
    environment.projects.push(newProject);
  }

  public deleteProject(id: number) {
    let index: number;
    index = environment.projects.findIndex(p => p.id == id);
    if (index !== -1) {
      environment.projects.splice(index, 1);
    }
  }

  public updateProject(id: number, newName: string) {
    environment.projects.filter(p => p.id == id)[0].name = newName;
  }
}
