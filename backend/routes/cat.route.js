const express = require('express');
const app = express();
const catRoute = express.Router();

let Cat = require('./../models/Cat');

catRoute.route('/').get((req, res) => {
    categories.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log(data)
        }
    })
})

module.exports = catRoute;
