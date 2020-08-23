import { HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from 'src/async-observable-helpers';
import { getTestProducts } from './testing/test-products';
import { ProductService } from './product.service';

describe('ProductService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: ProductService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new ProductService(httpClientSpy as any);
    });

    it('should return expected products (HttpClient called once)', () => {
        const catName = "someCat";
        const expectedProducts = getTestProducts();

        httpClientSpy.get.and.returnValue(asyncData(expectedProducts));

        service.getProducts(catName).subscribe(
            products => expect(products).toEqual(expectedProducts, 'expected products'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return expected product\'s product id, title, price and image', () => {
        const catName = "someCat";
        const expectedProduct = [{
            "_id": "abcd12345",
            "productTitle": "Some name",
            "productPrice": "1.99",
            "productImage": "images/some/image.png"
        }];
        const id = "abcd12345";

        httpClientSpy.get.and.returnValue(asyncData(expectedProduct));

        service.getProduct(id, catName).subscribe(
            product => expect(product).toEqual(expectedProduct, 'expected product'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when the server returns a 404', () => {
        const catName = "someCat";
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(asyncError(errorResponse));

        service.getProducts(catName).subscribe(
            products => fail('expected an error, not products'),
            error  => expect(error.message).toContain('test 404 error')
        );
    });
});
