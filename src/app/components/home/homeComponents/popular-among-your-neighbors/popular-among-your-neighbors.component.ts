import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../../../services/productService/product.service';

@Component({
    selector: 'app-popular-among-your-neighbors',
    templateUrl: './popular-among-your-neighbors.component.html',
    styleUrls: ['./popular-among-your-neighbors.component.css']
})

/**
 * popular among your neighbors component
 */
export class PopularAmongYourNeighborsComponent implements OnInit {

    private popularData: any = [];
    private popularItems: any = [
        {"productId":"5eff7131dcc5c84b47253f6a","type":"pizzas"},
        {"productId":"5efe6c1fdcc5c84b47253f3d","type":"chicken"},
        {"productId":"5efe6dc9dcc5c84b47253f47","type":"desserts"},
        {"productId":"5eff72cadcc5c84b47253f76","type":"sandwiches"},
        {"productId":"5eff7264dcc5c84b47253f73","type":"salads"}
    ]

    // popular among your neighbors constructor
    constructor(private productApi: ProductService) { }

    // popular among your neighbors ngOnInit
    ngOnInit(): void {
        this.populatePopularItems();
    }

    private populatePopularItems = () => {
        for (let i = 0; i < this.popularItems.length; i++) {
            this.getPopularItems(this.popularItems[i]);
        }
    }

    private getPopularItems = (popularItem) => {
        this.productApi.getProduct(popularItem.productId, popularItem.type).subscribe(data => {
            this.popularData.push(data);
        })
    }
}
