import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from 'src/app/dashboard/models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {

  public name: string;

  @Input() public projects$: Observable<Project[]>;
  @Output() delete = new EventEmitter<number>();
  @Output() public search = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
