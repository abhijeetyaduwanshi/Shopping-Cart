const express = require('express');
const productRoute = express.Router();

let Breads = require('./../models/Breads');
let Chicken = require('./../models/Chicken');
let Desserts = require('./../models/Desserts');
let Drinks = require('./../models/Drinks');
let Pasta = require('./../models/Pasta');
let Pizzas = require('./../models/Pizzas');
let Product = require('./../models/Product');
let Salads = require('./../models/Salads');
let Sandwiches = require('./../models/Sandwiches');

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
        case 'drinks':
            Model = Drinks;
            break;
        case 'pasta':
            Model = Pasta;
            break;
        case 'pizzas':
            Model = Pizzas;
            break;
        case 'salads':
            Model = Salads;
            break;
        case 'sandwiches':
            Model = Sandwiches;
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
