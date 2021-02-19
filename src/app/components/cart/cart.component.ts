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
}
