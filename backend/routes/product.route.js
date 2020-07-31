const express = require('express');
const productRoute = express.Router();

let Breads = require('./../models/Breads');
let Chicken = require('./../models/Chicken');
let Desserts = require('./../models/Desserts');
let Drinks = require('./../models/Drinks');
let Extras = require('./../models/Extras');
let Pasta = require('./../models/Pasta');
let Pizzas = require('./../models/Pizzas');
let Product = require('./../models/Product');
let Salads = require('./../models/Salads');
let Sandwiches = require('./../models/Sandwiches');

/**
 * get the list of products in a category
 * 
 * @param  {category} name of the category
 */
productRoute.route('/:category').get((req, res) => {
    let model = modelFinder(req.params.category);

    model.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

/**
 * get an individual products in a category based on its id
 * and returns only product title, product image and product price
 * 
 * @param  {id} id of the product
 * @param  {category} name of the category
 */
productRoute.route('/:id/:category').get((req, res) => {
    let model = modelFinder(req.params.category);
    let returningData = {};

    model.findById(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            returningData.productTitle = data.productTitle
            returningData.productPrice = data.productPrice
            returningData.productImage = data.productImage
            res.json(returningData)
        }
    })
})

/**
 * finds the model based on the url parameter
 * 
 * @param  {model} name of the model
 */
function modelFinder(model) {
    switch (model) {
        case 'breads':
            return Breads;
        case 'chicken':
            return Chicken;
        case 'desserts':
            return Desserts;
        case 'drinks':
            return Drinks;
        case 'extras':
            return Extras;
        case 'pasta':
            return Pasta;
        case 'pizzas':
            return Pizzas;
        case 'salads':
            return Salads;
        case 'sandwiches':
            return Sandwiches;
        default:
            return Product;
    }
}

module.exports = productRoute;
