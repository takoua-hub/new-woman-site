import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifestyleComponent } from './lifestyle.component';



@NgModule({
  declarations: [LifestyleComponent],
  imports: [
    CommonModule
  ],
  exports: [LifestyleComponent]
})
export class LifestyleModule { }
