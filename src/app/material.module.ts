import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatMenuModule
    ]
})

export class AngularMaterialModule { }
