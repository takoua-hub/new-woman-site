import { ListProductsComponent } from './site/cosmetic/list-products/list-products.component';
import { AppComponent } from './app.component';
import { ErrorsComponent } from './site/errors/errors.component';
import { LifestyleComponent } from './site/lifestyle/lifestyle.component';
import { KitchenComponent } from './site/kitchen/kitchen.component';
import { CosmeticComponent } from './site/cosmetic/cosmetic.component';
import { ContactComponent } from './site/contact/contact.component';
import { AboutComponent } from './site/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cosmetic', component: CosmeticComponent},
  { path: 'kitchen', component: KitchenComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'cosmetic/:nomc', component: ListProductsComponent},
  { path: '404', component: ErrorsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
