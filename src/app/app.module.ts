import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { CatService } from './services/catService/cat.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationService } from './services/navigationService/navigation.service';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/productService/product.service';

@NgModule({
    declarations: [
        AppComponent,
        CatComponent,
        NavigationComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        RouterModule.forRoot([
            { path: '', component: CatComponent },
            { path: 'cat/:categoryId', component: ProductComponent }
        ])
    ],
    providers: [
        CatService,
        NavigationService,
        ProductService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }