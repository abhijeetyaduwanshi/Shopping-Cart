import { Component, OnInit } from '@angular/core';
import { Cat } from './../../shared/cat';
import { ApiService } from './../../shared/api.service';

@Component({
    selector: 'app-cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css']
})

export class CatComponent implements OnInit {
    CatData: any = [];

    constructor(private catApi: ApiService) {
        this.catApi.GetCats().subscribe(data => {
            this.CatData = data;
        })
    }

    ngOnInit() { }
}
