import { Component } from '@angular/core';
import { CATS } from './mock-cats';

@Component({
    selector: 'app-root',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css']
})

export class CatComponent {
    cats = CATS;
}
