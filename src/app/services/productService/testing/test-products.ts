import { Product } from './../product';

export function getTestProducts(): Product[] {
    return [
        {
            "_id": "abcd12345",
            "productClass": "Some class",
            "productTitle": "Some title",
            "productDescription": "Some description",
            "productImage": "Some img path",
            "productImageAlternateText": "Some img text",
            "productPrice": "1.99",
            "productIsVegetarian": "true",
            "productIsSpicy": "mild"
        },
        {
            "_id": "xyz9876",
            "productClass": "Some other class",
            "productTitle": "Some other title",
            "productDescription": "Some other description",
            "productImage": "Some other img path",
            "productImageAlternateText": "Some other img text",
            "productPrice": "1.99",
            "productIsVegetarian": "true",
            "productIsSpicy": "mild"
        }
    ]
}
