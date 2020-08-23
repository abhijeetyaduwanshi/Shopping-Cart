import { asyncData } from 'src/async-observable-helpers';
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
        const expectedProduct = getTestProducts();
        const catName = "someCat";

        httpClientSpy.get.and.returnValue(asyncData(expectedProduct));

        service.getProducts(catName).subscribe(
            products => expect(products).toEqual(expectedProduct, 'expected products'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return expected product\'s product id, title, price and image', () => {
        const expectedProduct = [{
            "_id": "abcd12345",
            "productTitle": "Some name",
            "productPrice": "1.99",
            "productImage": "images/some/image.png"
        }];
        const id = "abcd12345";
        const catName = "someCat";

        httpClientSpy.get.and.returnValue(asyncData(expectedProduct));

        service.getProduct(id, catName).subscribe(
            product => expect(product).toEqual(expectedProduct, 'expected product'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
});
