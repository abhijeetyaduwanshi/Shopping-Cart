import { Component, OnInit } from '@angular/core';

import { Breads } from './../../services/breadsService/breads';
import { BreadsService } from './../../services/breadsService/breads.service';

@Component({
    selector: 'app-breads',
    templateUrl: './breads.component.html',
    styleUrls: ['./breads.component.css']
})

export class BreadsComponent implements OnInit {
    breadsData: any = [];

    constructor(private breadsApi: BreadsService) { }

    ngOnInit() {
        this.getBreads();
    }

    private getBreads = () => {
        this.breadsApi.getBreads().subscribe(data => {
            this.breadsData = data;
        })
    }
}
