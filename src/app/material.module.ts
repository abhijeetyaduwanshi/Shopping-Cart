import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule
    ]
})

export class AngularMaterialModule { }
