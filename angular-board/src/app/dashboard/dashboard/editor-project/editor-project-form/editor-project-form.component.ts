import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from 'src/app/dashboard/models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor-project-form',
  templateUrl: './editor-project-form.component.html',
  styles: []
})
export class EditorProjectFormComponent implements OnInit {

  @Input() project: Project;
  @Output() update = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<boolean>();
  public newName: string;
  constructor() { }

  ngOnInit() {
  }

}
