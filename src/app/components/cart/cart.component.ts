import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/productService/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartedProducts = JSON.parse(localStorage.getItem("cartedProducts")) || [];
  cartedProductData: any = [];
  cartTotal: number = 0;

  constructor(private productApi: ProductService) { }

  ngOnInit(): void {
    this.populateCart();
  }

  /**
   * Populate cart
   */
  populateCart = () => {
    if (this.cartedProducts.length > 0) {
      for (let i = 0; i < this.cartedProducts.length; i++) {
        let cartedProduct = this.cartedProducts[i];
        this.productApi.getProduct(cartedProduct.type, cartedProduct.productId).subscribe(data => {
          data["productQuantity"] = cartedProduct.count;
          data["productCalculatedPrice"] = data["productPrice"] * cartedProduct.count;
          this.cartedProductData.push(data);
          this.cartTotal += parseFloat(data["productCalculatedPrice"]);
        })
      }
    }
  }

  /**
   * Removes product from cart
   * 
   * @param  {any} cartedProduct
   */
  removeFromCart = (cartedProduct: any) => {
    let cartedProductDataIndex = this.cartedProductData.indexOf(cartedProduct);
    let removingCartedProduct = cartedProduct.productQuantity;

    if (cartedProductDataIndex >= 0) {
      this.cartedProductData.splice(cartedProductDataIndex, 1);
    } else {
      return;
    }

    for (let i = 0; i < this.cartedProducts.length; i++) {
      let product = this.cartedProducts[i];
      if (product.productId === cartedProduct._id) {
        let productIndex = this.cartedProducts.indexOf(product);
        this.cartedProducts.splice(productIndex, 1);
        break;
      }
    }

    this.cartTotal -= parseFloat(cartedProduct.productCalculatedPrice);
    localStorage.setItem("cartedProducts", JSON.stringify(this.cartedProducts));
    this.productApi.editCartCount(-removingCartedProduct);
  }
}
