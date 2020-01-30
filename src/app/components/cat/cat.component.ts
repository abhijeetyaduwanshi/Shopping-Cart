import { Component, OnInit } from '@angular/core';
import { Cat } from './../../services/catService/cat';
import { CatService } from './../../services/catService/cat.service';

@Component({
    selector: 'app-cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css']
})

export class CatComponent implements OnInit {
    CatData: any = [];

    constructor(private catApi: CatService) {
        this.catApi.GetCats().subscribe(data => {
            this.CatData = data;
        })
    }

    ngOnInit() { }
}
