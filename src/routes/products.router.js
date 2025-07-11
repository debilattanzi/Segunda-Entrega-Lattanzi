const express = require('express');
const router = express.Router();
const products = require('../products');

router.get('/', (req, res) => {
  res.json(products.getAll());
});

router.post('/', (req, res) => {
  const { title, price } = req.body;
  const newProduct = { title, price };
  products.add(newProduct);
  res.status(201).json(newProduct);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products.remove(id);
  res.status(204).send();
});

module.exports = router;