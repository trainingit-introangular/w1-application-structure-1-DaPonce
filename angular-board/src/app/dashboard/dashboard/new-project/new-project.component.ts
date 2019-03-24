import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {
  constructor(private projectService: ProjectsService, private router: Router) {}

  ngOnInit() {}

  public onAdd(nameProject: string) {
    let nProject: Project;
    // this.projectService.addProject(nameProject);
    nProject = {
      name: nameProject,
      _id: 0,
    };

    this.projectService.createProject$(nProject).subscribe(d => {
      console.log(d);
      this.router.navigate(['dashboard']);
    });
  }

  public onCancel(b: boolean) {
    this.router.navigate(['dashboard']);
  }
}
