import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../../services/productService/product.service';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.css']
})

export class PopularItemsComponent implements OnInit {
  popularData: any = [];
  popularItems: any = [
    { "productId": "5e029aff97a8250004dc590c", "type": "Pizzas" },
    { "productId": "5e02912697a8250004dc58dc", "type": "Chicken" },
    { "productId": "5e02948197a8250004dc58e1", "type": "Desserts" },
    { "productId": "5e0295b097a8250004dc58eb", "type": "Sandwiches" },
    { "productId": "5e0295f597a8250004dc58ed", "type": "Salads" }
  ]

  constructor(private productApi: ProductService) { }

  ngOnInit(): void {
    this.populatePopularItems();
  }

  /**
   * Get products from popularItems object above
   * Change this to get data from DB
   */
  populatePopularItems = () => {
    for (let i = 0; i < this.popularItems.length; i++) {
      this.getPopularItems(this.popularItems[i]);
    }
  }

  /**
   * Get popular items
   * 
   * @param  {any} popularItem
   */
  getPopularItems = (popularItem: any) => {
    this.productApi.getProduct(popularItem.type, popularItem.productId).subscribe(data => {
      this.popularData.push(data);
    })
  }
}
