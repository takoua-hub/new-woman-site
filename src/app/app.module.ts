import { SharedModule } from './site/shared/shared.module';
import { LifestyleModule } from './site/lifestyle/lifestyle.module';
import { KitchenModule } from './site/kitchen/kitchen.module';
import { HomeModule } from './site/home/home.module';
import { ErrorsModule } from './site/errors/errors.module';
import { CosmeticModule } from './site/cosmetic/cosmetic.module';
import { ContactModule } from './site/contact/contact.module';
import { AboutModule } from './site/about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './site/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    CosmeticModule,
    HomeModule,
    KitchenModule,
    LifestyleModule,
    SharedModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
