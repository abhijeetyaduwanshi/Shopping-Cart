import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './services/categoryService/category.service';
import { HomeComponent } from './components/home/home.component';
import { NavigationService } from './services/navigationService/navigation.service';
import { PopularItemsComponent } from './components/home/popular-items/popular-items.component';
import { ProductAddedToCartDialog, ProductComponent } from './components/product/product.component';
import { ProductService } from './services/productService/product.service';
import { SideNavigationComponent } from './components/navigation/side-navigation/side-navigation.component';
import { TopNavigationComponent } from './components/navigation/top-navigation/top-navigation.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    CartComponent,
    CategoryComponent,
    HomeComponent,
    PopularItemsComponent,
    ProductAddedToCartDialog,
    ProductComponent,
    SideNavigationComponent,
    TopNavigationComponent
  ],
  entryComponents: [
    ProductAddedToCartDialog
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
