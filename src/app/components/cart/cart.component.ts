import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.productLookUp();
    }

    private productLookUp = () => {
        let cartedProducts = JSON.parse(localStorage.getItem("cartedProducts")) || [];

        console.log(cartedProducts);
        if (cartedProducts.length > 0) {
            for (let i = 0; i < cartedProducts.length; i++) {
                console.error(cartedProducts[i])
            }
        }
    }
}
