const express = require('express');
const productRoute = express.Router();

let Product = require('./../models/Product');

productRoute.route('/:category').get((req, res) => {
    console.log(req.params.category)
    Product.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = productRoute;
