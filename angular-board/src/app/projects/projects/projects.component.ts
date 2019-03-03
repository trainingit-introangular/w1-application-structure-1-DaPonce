import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = environment.projects;
  }

}
