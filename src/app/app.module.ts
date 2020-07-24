import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowseOurMenuComponent } from './components/home/homeComponents/browse-our-menu/browse-our-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { CatComponent } from './components/cat/cat.component';
import { CatService } from './services/catService/cat.service';
import { CreateYourProfileComponent } from './components/home/homeComponents/create-your-profile/create-your-profile.component';
import { DeliveryOrPickupComponent, PickupDialog, TemporaryDeliveryDialog } from './components/home/homeComponents/delivery-or-pickup/delivery-or-pickup.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationService } from './services/navigationService/navigation.service';
import { PopularAmongYourNeighborsComponent } from './components/home/homeComponents/popular-among-your-neighbors/popular-among-your-neighbors.component';
import { ProductAddedToCartDialog, ProductComponent } from './components/product/product.component';
import { ProductService } from './services/productService/product.service';
import { SignInToYourProfileComponent } from './components/home/homeComponents/sign-in-to-your-profile/sign-in-to-your-profile.component';
import { OrderAgainComponent } from './components/home/homeComponents/order-again/order-again.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        BrowseOurMenuComponent,
        CartComponent,
        CatComponent,
        CreateYourProfileComponent,
        DeliveryOrPickupComponent,
        HomeComponent,
        NavigationComponent,
        PickupDialog,
        PopularAmongYourNeighborsComponent,
        ProductAddedToCartDialog,
        ProductComponent,
        SignInToYourProfileComponent,
        TemporaryDeliveryDialog,
        OrderAgainComponent
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
            { path: 'cart', component: CartComponent },
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
