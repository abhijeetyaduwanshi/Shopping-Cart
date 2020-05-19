const express = require('express');
const pizzasRoute = express.Router();

let Pizzas = require('./../models/Pizzas');

pizzasRoute.route('/pizzas').get((req, res) => {
    Pizzas.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = pizzasRoute;
