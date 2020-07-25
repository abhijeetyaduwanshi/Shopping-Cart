import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/productService/product.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

/**
 * cart component
 */
export class CartComponent implements OnInit {
    cartedProductData: any = [];

    // cart constructor
    constructor(private productApi: ProductService) { }

    // cart ngOnInit
    ngOnInit(): void {
        this.productLookUp();
    }

    /**
     * takes the carted products from the local storage and sends them
     * to the `populateCart` method to be populated on the cart page
     */
    private productLookUp = () => {
        let cartedProducts = JSON.parse(localStorage.getItem("cartedProducts")) || [];

        if (cartedProducts.length > 0) {
            for (let i = 0; i < cartedProducts.length; i++) {
                this.populateCart(cartedProducts[i])
            }
        }
    }

    /**
     * takes individual product from the `productLookUp` method,
     * gets data from the service based on the product id and category type,
     * and send the data to front end to be populated on the cart page
     * 
     * @param  {cartedProduct} product carted by the customers
     */
    private populateCart = (cartedProduct) => {
        this.productApi.getProduct(cartedProduct.productId, cartedProduct.type).subscribe(data => {
            this.cartedProductData.push(data);
        })
    }
}
