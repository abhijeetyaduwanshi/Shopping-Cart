import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowseOurMenuComponent } from './components/home/homeComponents/browse-our-menu/browse-our-menu.component';
import { CatComponent } from './components/cat/cat.component';
import { CatService } from './services/catService/cat.service';
import { DeliveryOrPickupComponent, PickupDialog, TemporaryDeliveryDialog } from './components/home/homeComponents/delivery-or-pickup/delivery-or-pickup.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationService } from './services/navigationService/navigation.service';
import { ProductAddedToCartDialog, ProductComponent } from './components/product/product.component';
import { ProductService } from './services/productService/product.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        BrowseOurMenuComponent,
        CatComponent,
        DeliveryOrPickupComponent,
        HomeComponent,
        NavigationComponent,
        PickupDialog,
        ProductAddedToCartDialog,
        ProductComponent,
        TemporaryDeliveryDialog
    ],
    entryComponents: [
        PickupDialog,
        ProductAddedToCartDialog,
        TemporaryDeliveryDialog
    ],
    imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'cat', component: CatComponent },
            { path: 'cat/:categoryId', component: ProductComponent }
        ])
    ],
    providers: [
        CatService,
        NavigationService,
        ProductService
    ]
})

export class AppModule { }
