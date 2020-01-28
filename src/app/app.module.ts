import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { ApiService } from './shared/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';

@NgModule({
    declarations: [
        AppComponent,
        CatComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [ApiService],
    bootstrap: [CatComponent]
})

export class AppModule { }
