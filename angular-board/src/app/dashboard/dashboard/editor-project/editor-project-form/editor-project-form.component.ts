import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from 'src/app/dashboard/models/project.model';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {}

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
}
