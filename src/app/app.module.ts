import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { ApiService } from './shared/api.service';

@NgModule({
    declarations: [
        AppComponent,
        CatComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ApiService],
    bootstrap: [CatComponent]
})

export class AppModule { }
