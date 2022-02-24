const express = require('express');
const nodemailer = require('nodemailer');
const {ValidationError} = require('../utils/errors')

const contactRouter = express.Router();

contactRouter
    .get('/', (req, res) => {
        res.render('contact/contact.hbs')
    })
    .post('/', (req, res) => {
        console.log(req.body)
        if ((req.body.email || req.body.subject || req.body.message) === '') {
            throw new Error('Proszę wypełnić wszystkie pola formularza');
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'danka.pendel@gmail.com',
                pass: 'Dawidek.1'
            },
            tls: {
                rejectUnauthorized: false,
            }
        })

        const mailOptions = {
            from: req.body.email,
            to: 'danutap56@wp.pl',
            subject: `Wiadomość od użytkownika ${req.body.email} o tytule ${req.body.subject}`,
            text: req.body.message
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.send('Coś poszło nie tak. Spróbuj ponownie.')
            } else {
                console.log(`Email sent: ${info.response}`);
                res.render('contact/contact.hbs')
            }
        })
    });

module.exports = {
    contactRouter,
}