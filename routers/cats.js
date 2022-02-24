const express = require('express');

const catsRouter = express.Router();

catsRouter
    .get('/', (req,res) => {
        res.render('cats/cats.hbs')
    });

module.exports = {
    catsRouter,
}