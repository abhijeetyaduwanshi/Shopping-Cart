const express = require('express');
const productRoute = express.Router();

let Breads = require('./../models/Breads');
let Product = require('./../models/Product');

productRoute.route('/:category').get((req, res) => {
    let Model = req.params.category == 'breads' ? Breads : Product;

    Model.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = productRoute;
