import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public numProjects: number;

  constructor() { }

  ngOnInit() {
    const projects = environment.projects;
    this.numProjects = projects.length;
  }

}
