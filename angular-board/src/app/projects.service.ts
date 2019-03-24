import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './dashboard/models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, share, filter } from 'rxjs/operators'
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
    return this.httpClient.get<Project[]>(this.API_URL);
  }

  public getProjectsByName$(nameFilter: string): Observable<Project[]> {
    if (nameFilter !== '') {
      return this.httpClient.get<Project[]>(this.API_URL).pipe(
        map(ps => ps.filter(p => p.name === nameFilter))
      );
      // return environment.projects.filter(p => p.name.toUpperCase() === nameFilter.toUpperCase());
    } else {
      return null;
    }
  }

  public getProjectById$(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.API_URL + '/' + id);
  }

  public createProject$(project: Project) {
    return this.httpClient.post(this.API_URL, project);
  }

  public deleteProject$(id: number) {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

  public updateProject(project: Project) {
    return this.httpClient.put(this.API_URL + '/' + project._id, project);
  }
}
