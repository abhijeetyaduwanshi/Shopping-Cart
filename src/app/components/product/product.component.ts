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
        let catName = this.activeRoute.snapshot.paramMap.get('categoryId').substr(this.activeRoute.snapshot.paramMap.get('categoryId').lastIndexOf('-') + 1);

        this.productApi.getProduct(catName).subscribe(data => {
            this.productData = data;
        })
    }
}
