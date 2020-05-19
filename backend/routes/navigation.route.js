const express = require('express');
const navigationRoute = express.Router();

let Navigation = require('./../models/Navigation');

navigationRoute.route('/navigation').get((req, res) => {
    Navigation.find({}, {categoryTitle: 1, categoryRoute: 1}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = navigationRoute;
