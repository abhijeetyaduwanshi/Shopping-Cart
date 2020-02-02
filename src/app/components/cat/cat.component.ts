import { Component, OnInit } from '@angular/core';

import { Cat } from './../../services/catService/cat';
import { CatService } from './../../services/catService/cat.service';

@Component({
    selector: 'app-cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css']
})

export class CatComponent implements OnInit {
    catData: any = [];

    constructor(private catApi: CatService) { }

    ngOnInit() {
        this.getCats();
    }

    private getCats = () => {
        this.catApi.getCats().subscribe(data => {
            this.catData = data;
        })
    }
}
