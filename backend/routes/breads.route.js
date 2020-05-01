const express = require('express');
const app = express();
const breadsRoute = express.Router();

let Breads = require('./../models/Breads');

breadsRoute.route('/breads').get((req, res) => {
    Breads.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = breadsRoute;
