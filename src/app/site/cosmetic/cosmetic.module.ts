import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticComponent } from './cosmetic.component';
import { RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';



@NgModule({
  declarations: [CosmeticComponent, ListProductsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CosmeticComponent]
})
export class CosmeticModule { }
