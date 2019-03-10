import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {
  constructor(private projectService: ProjectsService, private router: Router) {}

  ngOnInit() {}

  public onAdd(nameProject: string) {
    this.projectService.addProject(nameProject);
    this.router.navigate(['dashboard']);
  }

  public onCancel(b: boolean) {
    this.router.navigate(['dashboard']);
  }
}
