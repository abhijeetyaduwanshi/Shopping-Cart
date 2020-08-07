import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
    let service: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductService]
        });
        service = TestBed.get(ProductService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have getProducts function', () => {
        const catName = "someCat";
        expect(service.getProducts(catName)).toBeTruthy();
    });

    it('getProducts should return product list', () => {
        const http = TestBed.get(HttpTestingController);

        const catName = "someCat";
        const expectedProduct = [{
            "_id": "abcd12345",
            "productTitle": "Some name",
            "productDescription": "Some Description.",
            "productIsSpicy": "mild",
            "productIsVegetarian": "true",
            "productPrice": "1.99",
            "productImage": "images/some/image.png"
        }];
        let actualProduct: any = [];

        service.getProducts(catName).subscribe(data => {
            actualProduct = data;
        });

        http.expectOne(`http://localhost:8080/api/get-products/${catName}`).flush(expectedProduct);
        expect(actualProduct).toEqual(expectedProduct);
    });

    it('should have getProduct function', () => {
        const id = "productId";
        const catName = "someCat";
        expect(service.getProduct(id, catName)).toBeTruthy();
    });

    it('getProduct should return product id, title, price and image', () => {
        const http = TestBed.get(HttpTestingController);

        const id = "productId";
        const catName = "someCat";
        const expectedProduct = [{
            "_id": "abcd12345",
            "productTitle": "Some name",
            "productPrice": "1.99",
            "productImage": "images/some/image.png"
        }];
        let actualProduct: any = [];

        service.getProduct(id, catName).subscribe(data => {
            actualProduct = data;
        });

        http.expectOne(`http://localhost:8080/api/get-product/${id}/${catName}`).flush(expectedProduct);
        expect(actualProduct).toEqual(expectedProduct);
    });
});
