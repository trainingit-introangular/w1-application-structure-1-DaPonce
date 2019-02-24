import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagValueComponent } from './tag-value/tag-value.component';

@NgModule({
  declarations: [TagValueComponent],
  imports: [
    CommonModule
  ],
  exports: [TagValueComponent]
})
export class SharedModule { }
