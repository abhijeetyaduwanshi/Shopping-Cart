import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/productService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  productData: any = [];
  categoryTitle = "";

  constructor(private activatedRoute: ActivatedRoute, private productApi: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryTitle = params.get("categoryTitle");
      this.getProducts();
    })
  }

  /**
   * GET all products
   */
  getProducts = () => {
    this.productApi.getProducts(this.categoryTitle).subscribe(data => {
      this.productData = data;
    })
  }

  /**
   * Product add to cart
   * 
   * @param  {any} productId
   */
  productAddToCart = (productId: any) => {
    const productAddingToCart = [];
    let isReturningProduct = false;

    const productAddingToCartDetails = {
      productId: productId,
      type: this.categoryTitle,
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
  }
}
