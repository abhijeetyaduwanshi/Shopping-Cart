import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatComponent } from './catPage/cat.component';

@NgModule({
    declarations: [
        AppComponent,
        CatComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [CatComponent]
})

export class AppModule { }
