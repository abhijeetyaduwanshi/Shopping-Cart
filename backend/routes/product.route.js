const express = require('express');
const productRoute = express.Router();

let Breads = require('./../models/Breads');
let Chicken = require('./../models/Chicken');
let Desserts = require('./../models/Desserts');
let Pasta = require('./../models/Pasta');
let Pizzas = require('./../models/Pizzas');
let Product = require('./../models/Product');

productRoute.route('/:category').get((req, res) => {
    let Model;
    switch (req.params.category) {
        case 'breads':
            Model = Breads;
            break;
        case 'chicken':
            Model = Chicken;
            break;
        case 'desserts':
            Model = Desserts;
            break;
        case 'pasta':
            Model = Pasta;
            break;
        case 'pizzas':
            Model = Pizzas;
            break;
        default:
            Model = Product;
            break;
    }

    Model.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = productRoute;
