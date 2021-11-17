import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowseOurMenuComponent } from './components/home/homeSubComponents/browse-our-menu/browse-our-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './services/categoryService/category.service';
import { DeliveryOrPickupComponent, DeliveryDialog, PickupDialog } from './components/home/homeSubComponents/delivery-or-pickup/delivery-or-pickup.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationService } from './services/navigationService/navigation.service';
import { PopularItemsComponent } from './components/home/homeSubComponents/popular-items/popular-items.component';
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
    BrowseOurMenuComponent,
    CartComponent,
    CategoryComponent,
    DeliveryDialog,
    DeliveryOrPickupComponent,
    HomeComponent,
    PickupDialog,
    PopularItemsComponent,
    ProductAddedToCartDialog,
    ProductComponent,
    SideNavigationComponent,
    TopNavigationComponent
  ],
  entryComponents: [
    DeliveryDialog,
    PickupDialog,
    ProductAddedToCartDialog
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    NavigationService,
    ProductService
  ]
})

export class AppModule { }
