import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from './../../services/productService/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

/**
 * product component
 */
export class ProductComponent implements OnInit {
    productData: any = [];

    // product constructor
    constructor(private activeRoute: ActivatedRoute, private dialog: MatDialog, private productApi: ProductService) { }

    // product ngOnInit
    ngOnInit() {
        this.activeRoute.params.subscribe(routeParams => {
            this.getProducts();
        });
    }

    /**
     * gets the products data from the service for a category
     */
    private getProducts = () => {
        const catName = this.activeRoute.snapshot.paramMap.get('categoryId').substr(this.activeRoute.snapshot.paramMap.get('categoryId').lastIndexOf('-') + 1);

        this.productApi.getProducts(catName).subscribe(data => {
            this.productData = data;
        })
    }

    /**
     * product on the products page can added to cart
     * 
     * @param  {productId} id of the product added to the cart
     */
    private addToCart = (productId) => {
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
        this.productApi.addCartCount(1);
    }

    /**
     * product added to the cart, modal is displayed with product details
     * 
     * @param  {product} product added to the cart
     */
    private openProductAddedToCartDialog = (product) => {
        this.dialog.open(ProductAddedToCartDialog, {
            data: {
                productTitle: product.productTitle,
                productIsVegetarian: product.productIsVegetarian,
                productIsSpicy: product.productIsSpicy
            }
        });
    }
}

export interface DialogData {
    productTitle: String;
    productIsVegetarian: String;
    productIsSpicy: String;
}

@Component({
    selector: 'product-added-to-cart-dialog',
    templateUrl: './product.added.to.cart.dialog/product-added-to-cart-dialog.html',
    styleUrls: ['./product.added.to.cart.dialog/product-added-to-cart-dialog.css']
})

/**
 * product added to cart dialog
 */
export class ProductAddedToCartDialog {
    constructor(@Inject(MAT_DIALOG_DATA) private data: DialogData) {}
}
