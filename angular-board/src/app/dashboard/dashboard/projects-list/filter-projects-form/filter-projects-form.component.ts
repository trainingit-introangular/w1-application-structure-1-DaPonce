import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from 'src/app/dashboard/models/project.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {
  public name: string;

  @Input() public projects: Project[];
  @Output() delete = new EventEmitter<number>();
  @Output() public search = new EventEmitter<string>();
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {}

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nameFilter: ['', Validators.required]
    });
  }
}
