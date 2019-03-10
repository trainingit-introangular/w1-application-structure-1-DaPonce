import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-editor-project-form',
  templateUrl: './editor-project-form.component.html',
  styles: []
})
export class EditorProjectFormComponent implements OnInit {

  @Input() originalName: string;
  @Input() id: number;
  @Output() update = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<boolean>();
  public newName: string;
  constructor() { }

  ngOnInit() {
    this.newName = this.originalName;
  }

}
