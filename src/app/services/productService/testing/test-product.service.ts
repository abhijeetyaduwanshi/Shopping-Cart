import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { asyncData } from './../../../../async-observable-helpers';

export { getTestCats } from './../../catService/testing/test-cats';
export { getTestProducts } from './test-products';
export { Product } from './../product';
export { ProductService } from './../product.service';

import { getTestCats } from './../../catService/testing/test-cats';
import { getTestProducts } from './test-products';
import { Product } from './../product';
import { ProductService } from './../product.service';

@Injectable()

export class TestProductService extends ProductService {

    constructor() {
        super(null);
    }

    products = getTestProducts();
    product = [{
        "_id": "abcd12345",
        "productTitle": "Some name",
        "productPrice": "1.99",
        "productImage": "images/some/image.png"
    }];
    cats = getTestCats();
    lastResult: Observable<any>;

    getProducts(catName): Observable<Product[]> {
        const cat = this.cats.find(c => c.categoryTitle === catName);
        return this.lastResult = asyncData(this.products);
    }

    getProduct(id, catName): Observable<any> {
        const cat = this.cats.find(c => c.categoryTitle === catName);
        const product = this.product.find(p => p._id === id);
        return this.lastResult = asyncData(product);
    }
}
