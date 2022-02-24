const express = require('express');

const galleryRouter = express.Router();

galleryRouter
    .get('/', (req,res) => {
        res.render('gallery/gallery.hbs')
    });

module.exports = {
    galleryRouter,
}