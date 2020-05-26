const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Drinks = new Schema({
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
    collection: 'Drinks'
})

module.exports = mongoose.model('Drinks', Drinks)
