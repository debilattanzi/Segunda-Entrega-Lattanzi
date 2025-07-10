const express = require('express');
const router = express.Router();
const products = require('../products');

router.get('/', (req, res) => {
  res.render('home', { productos: products.getAll() });
});

router.get('/realTimeProducts', (req, res) => {
  res.render('realTimeProducts'); 
});

module.exports = router;
