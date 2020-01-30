const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Navigation = new Schema({
    categoryTitle: {
        type: String
    }
}, {
    collection: 'categories'
})

module.exports = mongoose.model('Navigation', Navigation)
