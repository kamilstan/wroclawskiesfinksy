const express = require('express');
const port = process.env.PORT || 3000;
const {engine} = require('express-handlebars');
const methodOverride = require('method-override');
const {handleError} = require('./utils/errors')
const {homeRouter} = require('./routers/home');
const {galleryRouter} = require('./routers/gallery');
const {catsRouter} = require('./routers/cats');
const {contactRouter} = require('./routers/contact');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/gallery', galleryRouter);
app.use('/cats', catsRouter);
app.use('/contact', contactRouter);

app.use(handleError);

app.listen(port);
