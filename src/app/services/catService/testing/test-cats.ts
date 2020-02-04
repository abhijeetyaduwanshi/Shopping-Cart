import { Cat } from './../cat';

export function getTestCats(): Cat[] {
    return [
        {
            "_id": "acbd12345",
            "categoryTitle": "Some title",
            "categoryDescription": "Some desc.",
            "categoryClass": "some-class",
            "categoryRoute": "some/category/route",
            "categoryImage": "assets/images/some/image.png",
            "categoryImageAlternateText": "catImage"
        },
        {
            "_id": "xyz98765",
            "categoryTitle": "Some other title",
            "categoryDescription": "Some other desc.",
            "categoryClass": "some-other-class",
            "categoryRoute": "some/other/category/route",
            "categoryImage": "assets/images/some/other/image.png",
            "categoryImageAlternateText": "otherCatImage"
        }
    ]
}
