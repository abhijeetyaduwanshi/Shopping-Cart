import { Navigation } from './../navigation';

export function getTestNavigation(): Navigation[] {
    return [
        {
            "_id": "acbd12345",
            "categoryTitle": "Some title",
            "categoryRoute": "some/category/route"
        },
        {
            "_id": "xyz98765",
            "categoryTitle": "Some other title",
            "categoryRoute": "some/other/category/route"
        }
    ]
}
