const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TopNavigation = new Schema({
    categoryTitle: {
        type: String
    }
}, {
    collection: 'categories'
})

module.exports = mongoose.model('TopNavigation', TopNavigation)
