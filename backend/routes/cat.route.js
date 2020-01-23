const express = require('express');
const app = express();
const catRoute = express.Router();

let Cat = require('./../models/Cat');

catRoute.route('/').get((req, res) => {
    Cat.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = catRoute;
