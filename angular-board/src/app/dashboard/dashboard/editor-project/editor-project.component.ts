import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor-project',
  templateUrl: './editor-project.component.html',
  styles: []
})
export class EditorProjectComponent implements OnInit {
  public project: Project;
  constructor(
    private projectService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectService.getProjectById$(this.activatedRoute.snapshot.params.id).subscribe(p => {
      this.project = p;
      console.log(p);
    });
  }

  public onUpdate(name: string) {
    // this.projectService.updateProject(this.project._id, name);
    this.router.navigate(['dashboard']);
  }

  public onCancel(b: boolean) {
    if (b) {
      this.router.navigate(['dashboard']);
    }
  }
}
