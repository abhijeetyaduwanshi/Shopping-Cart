import { Component, OnInit } from '@angular/core';

import { Pizzas } from './../../services/pizzasService/pizzas';
import { PizzasService } from './../../services/pizzasService/pizzas.service';

@Component({
    selector: 'app-pizzas',
    templateUrl: './pizzas.component.html',
    styleUrls: ['./pizzas.component.css']
})

export class PizzasComponent implements OnInit {
    pizzasData: any = [];

    constructor(private pizzasApi: PizzasService) { }

    ngOnInit() {
        this.getPizzas();
    }

    private getPizzas = () => {
        this.pizzasApi.getPizzas().subscribe(data => {
            this.pizzasData = data;
        })
    }
}
