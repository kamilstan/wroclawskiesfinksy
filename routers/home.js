const express = require('express');

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {

        const url = req.originalUrl;

        res.render('home/home.hbs', {
            url,
        });

    });

module.exports = {
    homeRouter,
}