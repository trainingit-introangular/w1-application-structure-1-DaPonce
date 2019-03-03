import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {

  public project: Project;
  constructor(private router: Router) { }

  ngOnInit() {
    this.project = {
      id: environment.projects.length,
      name: ''
    };
  }

  public saveProject(project: Project) {
    project.id = environment.projects.length;
    environment.projects.push(project);
    this.router.navigate(['projects']);
  }

  public resetForm() {
    this.project.name = '';
  }

  public cancel() {
    this.router.navigate(['projects']);
  }

}
