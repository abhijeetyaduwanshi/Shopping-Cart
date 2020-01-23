const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Cat', Cat)
