const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    productClass: {
        type: String
    },
    productImage: {
        type: String
    },
    productImageAlternateText: {
        type: String
    },
    productTitle: {
        type: String
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: String
    },
    productIsVegetarian: {
        type: String
    },
    productIsSpicy: {
        type: String
    }
}, {
    collection: 'Salads'
})

module.exports = mongoose.model('Product', Product)
