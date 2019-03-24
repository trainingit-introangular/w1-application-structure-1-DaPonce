import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.loadAllData();
    // this.projectService.getProjects$();
  }

  public onSearch(nameFilter: string) {
    this.projectService.getProjectsByName$(nameFilter).subscribe(p => {
      console.log(p);
      this.projects = p;
    });
  }

  public onDelete(id: number) {
    this.projectService.deleteProject$(id).subscribe(p =>
      this.loadAllData()
    );
  }

  private loadAllData() {
    this.projectService.getProjects$().subscribe(d => {
      console.log(d);
      this.projects = d;
    });
  }
}
