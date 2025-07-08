const express = require('express');
const router = express.Router();
const products = require('../products.js');

router.get('/', (req, res) => {
    res.render('home', {productos: products.getAll()});
}); //vista de index

router.get('/realTimeProducts', (req, res) => {
    res.render('realTimeProducts');
}); //vista en tiempo real



module.exports = router;