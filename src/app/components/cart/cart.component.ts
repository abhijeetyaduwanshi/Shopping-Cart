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

    // cart page variables
    private cartedProductData: any = [];
    private cartData: any = [];
    private cartTotal: number = 0;

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
                this.populateCart(cartedProducts[i]);
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
        let returningData: any = [];

        this.productApi.getProduct(cartedProduct.productId, cartedProduct.type).subscribe(data => {
            this.cartData = data;
            returningData._id = this.cartData._id;
            returningData.productTitle = this.cartData.productTitle;
            returningData.productImage = this.cartData.productImage;
            returningData.productPrice = this.cartData.productPrice;
            returningData.productQuantity = cartedProduct.count;
            returningData.productCalculatedPrice = this.cartData.productPrice * cartedProduct.count;
            this.cartedProductData.push(returningData);
            this.cartTotal += parseFloat(returningData.productCalculatedPrice);
        })
    }
}