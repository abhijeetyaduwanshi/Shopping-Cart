import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from './../../services/productService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  productData: any = [];

  constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog, private productApi: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts();
    })
  }

  /**
   * GET all products
   */
  getProducts = () => {
    const categoryTitle = this.activatedRoute.snapshot.paramMap.get("categoryTitle");

    this.productApi.getProducts(categoryTitle).subscribe(data => {
      this.productData = data;
    })
  }

  /**
   * Product add to cart
   * 
   * @param  {any} productId
   */
  productAddToCart = (productId: any) => {
    const categoryTitle = this.activatedRoute.snapshot.paramMap.get("categoryTitle");
    const productAddingToCart = [];
    let isReturningProduct = false;

    const productAddingToCartDetails = {
      productId: productId,
      type: categoryTitle,
      count: 1
    };

    productAddingToCart.push(productAddingToCartDetails);

    if (JSON.parse(localStorage.getItem('cartedProducts')) == null) {
      localStorage.setItem('cartedProducts', JSON.stringify(productAddingToCart));
    } else {
      const cartedProducts = JSON.parse(localStorage.getItem('cartedProducts'));
      for (let i = 0; i < cartedProducts.length; i++) {
        if (cartedProducts[i].productId === productAddingToCartDetails.productId) {
          cartedProducts[i].count++;
          isReturningProduct = true;
          break;
        }
      }

      if (!isReturningProduct) {
        cartedProducts.push(productAddingToCartDetails);
      }

      localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts));
    }
    this.productApi.editCartCount(1);
  }

  /**
   * Open product added to cart dialog
   * 
   * @param  {any} product
   */
  openProductAddedToCartDialog = (product: any) => {
    this.dialog.open(ProductAddedToCartDialog, {
      data: {
        product
      }
    });
  }
}

export interface DialogData {
  product: any;
}

@Component({
  selector: 'app-product-added-to-cart-dialog',
  templateUrl: './product.added.to.cart.dialog/product-added-to-cart-dialog.html',
  styleUrls: ['./product.added.to.cart.dialog/product-added-to-cart-dialog.css']
})

export class ProductAddedToCartDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
