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
    this.numProjects = 0;
    this.projectService.getProjects$().subscribe(p => {
      if (p != null) {
        this.numProjects = p.length;
      }
    });
  }

}
