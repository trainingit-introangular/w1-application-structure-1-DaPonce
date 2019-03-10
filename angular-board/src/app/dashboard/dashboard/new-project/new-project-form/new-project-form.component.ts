import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {
  public newName: string;
  @Output() add = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}
}
