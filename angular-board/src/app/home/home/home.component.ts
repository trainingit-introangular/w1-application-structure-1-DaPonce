import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public numProjects: number;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getProjects$().subscribe(p => {
    this.numProjects = p.length;
    });
  }

}
