import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule
    ]
})

export class AngularMaterialModule { }
