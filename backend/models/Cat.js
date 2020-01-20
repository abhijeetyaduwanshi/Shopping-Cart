const mongojs = require('mongojs');
const Schema = mongojs.Schema;

let Cat = new Schema({
    categoryClass: {
        type: String
    },
    categoryRoute: {
        type: String
    },
    categoryImage: {
        type: String
    },
    categoryImageAlternateText: {
        type: String
    },
    categoryTitle: {
        type: String
    },
    categoryDescription: {
        type: String
    }
}, {
    collection: 'categories'
})

module.exports = mongojs.model('Cat', Cat)
