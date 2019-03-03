import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-editor-project',
  templateUrl: './editor-project.component.html',
  styles: []
})
export class EditorProjectComponent implements OnInit {

  public projectId: number;
  public originalName: string;
  public project: Project;
  constructor(activateRoute: ActivatedRoute, private router: Router) {
    this.projectId = activateRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.originalName = environment.projects.filter(p => p.id == this.projectId)[0].name;
    this.project = {
      id: this.projectId,
      name: this.originalName
    };
  }

  public editProject(project: Project) {
    environment.projects.filter(p => p.id == project.id)[0].name = project.name;
    this.router.navigate(['projects']);
  }

  public cancel() {
    this.router.navigate(['projects']);
  }
}
