const express = require('express');
const app = express();
const topNavigationRoute = express.Router();

let TopNavigation = require('./../models/TopNavigation');

topNavigationRoute.route('/navigation').get((req, res) => {
    TopNavigation.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = topNavigationRoute;
