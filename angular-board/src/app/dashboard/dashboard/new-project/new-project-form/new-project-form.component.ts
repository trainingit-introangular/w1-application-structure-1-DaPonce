import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {
  public newName: string;
  @Output() add = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<boolean>();

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
