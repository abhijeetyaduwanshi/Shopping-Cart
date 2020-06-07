const express = require('express');
const navigationRoute = express.Router();

let Navigation = require('./../models/Navigation');

navigationRoute.route('/').get((req, res) => {
    Navigation.find({}, {categoryId: 1, categoryTitle: 1}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = navigationRoute;
