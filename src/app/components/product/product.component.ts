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

  constructor(private activatedRoute: ActivatedRoute, private productApi: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const categoryTitle = params.get("categoryTitle");
      this.getProducts(categoryTitle);
    })
  }

  /**
   * GET all products
   * 
   * @param  {any} categoryTitle
   */
  getProducts = (categoryTitle: any) => {
    this.productApi.getProducts(categoryTitle).subscribe(data => {
      this.productData = data;
    })
  }
}
