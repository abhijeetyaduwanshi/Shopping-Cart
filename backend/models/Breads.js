const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Breads = new Schema({
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
    collection: 'Breads'
})

module.exports = mongoose.model('Breads', Breads)