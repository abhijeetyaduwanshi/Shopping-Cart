import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from './../../services/productService/product';
import { ProductService } from './../../services/productService/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    productData: any = [];

    constructor(private activeRoute: ActivatedRoute, private productApi: ProductService) { }

    ngOnInit() {
        this.getProduct();
    }

    private getProduct = () => {
        const catName = this.activeRoute.snapshot.paramMap.get('categoryId').substr(this.activeRoute.snapshot.paramMap.get('categoryId').lastIndexOf('-') + 1);

        this.productApi.getProduct(catName).subscribe(data => {
            this.productData = data;
        })
    }

    private addToCart = (productId) => {
        alert("Item added to cart");
        const catName = this.activeRoute.snapshot.paramMap.get('categoryId').substr(this.activeRoute.snapshot.paramMap.get('categoryId').lastIndexOf('-') + 1);
        const products = [];
        let returningProduct = false;

        const productDetails = {
            productId: productId,
            type: catName,
            count: 1
        };

        products.push(productDetails);

        if (JSON.parse(localStorage.getItem("cartedProducts")) == null) {
            localStorage.setItem("cartedProducts", JSON.stringify(products));
        } else {
            const cartedProducts = JSON.parse(localStorage.getItem("cartedProducts"));
            for (let i = 0; i < cartedProducts.length; i++) {
                if (cartedProducts[i].productId == productDetails.productId) {
                    cartedProducts[i].count++;
                    returningProduct = true;
                    break;
                }
            }

            if (!returningProduct) {
                cartedProducts.push(productDetails);
            }

            localStorage.setItem("cartedProducts", JSON.stringify(cartedProducts));
        }
    }
}
