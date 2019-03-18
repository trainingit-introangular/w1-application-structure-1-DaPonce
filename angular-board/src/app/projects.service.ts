import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './dashboard/models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, share } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private API_URL = 'https://api-base.herokuapp.com/api/pub/projects';
  private projects$: Observable<Project[]> = null;
  private projects: Project[];

  constructor(private httpClient: HttpClient) { }
  public getProjects = environment.projects;

  public getProjects$(): Observable<Project[]> {
    this.projects$ = this.httpClient.get(this.API_URL).pipe(tap(p => console.log(p)), map(this.transformData));
    return this.projects$;
  }

  public getProjectsByName(nameFilter: string): Project[] {
    if (nameFilter !== '') {
      return environment.projects.filter(p => p.name.toUpperCase() === nameFilter.toUpperCase());
    } else {
      // return this.getProjects;
      return null;
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
    this.httpClient.post(this.API_URL, newProject).subscribe();
    environment.projects.push(newProject);
  }

  public deleteProject(id: number) {
    let index: number;
    index = environment.projects.findIndex(p => p.id == id);
    if (index !== -1) {
      environment.projects.splice(index, 1);
    }
    this.httpClient.delete(this.API_URL).subscribe();
  }

  public updateProject(id: number, newName: string) {
    environment.projects.filter(p => p.id == id)[0].name = newName;
  }

  private transformData(currentProjects) {
    const current: Project[] = currentProjects.map(item => ({
      id: item.id,
      name: item.name
    }));
    return current;
  }
}
