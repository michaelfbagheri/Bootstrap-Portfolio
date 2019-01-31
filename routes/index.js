var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index')
});

router.get('/contact', function (req, res) {
    res.render('contact')
});

router.get('/portfolio', function (req, res) {
    console.log('inside portfolio')
    res.render('portfolio')
});