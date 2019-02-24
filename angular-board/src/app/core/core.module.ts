import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, LayoutComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
