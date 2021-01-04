import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './services/categoryService/category.service';
import { NavigationService } from './services/navigationService/navigation.service';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/productService/product.service';
import { TopNavigationComponent } from './components/navigation/top-navigation/top-navigation.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    TopNavigationComponent
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    NavigationService,
    ProductService
  ]
})

export class AppModule { }
