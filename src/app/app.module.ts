import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { ApiService } from './shared/api.service';
import { NavigationService } from './shared/navigation.service';
import { AngularMaterialModule } from './material.module';

@NgModule({
    declarations: [
        AppComponent,
        CatComponent,
        TopNavigationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [
        ApiService,
        NavigationService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
