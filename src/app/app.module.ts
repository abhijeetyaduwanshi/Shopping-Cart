import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: []
})

export class AppModule { }
