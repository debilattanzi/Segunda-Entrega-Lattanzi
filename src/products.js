let productos = [
    {
      "id": 1,
      "title": "Auriculares Bluetooth",
      "price": 9500
    },
    {
      "id": 2,
      "title": "Teclado Mecánico",
      "price": 18500
    },
    {
      "id": 3,
      "title": "Mouse Gamer",
      "price": 7500
    },
    {
      "id": 4,
      "title": "Monitor 24\" LED",
      "price": 58000
    },
    {
      "id": 5,
      "title": "Silla Ergonómica",
      "price": 43000
    },
    {
      "id": 6,
      "title": "Webcam HD",
      "price": 11200
    },
    {
      "id": 7,
      "title": "Notebook 15.6\"",
      "price": 250000
    }
  ]
  
  let nextId = productos.length + 1;

  module.exports = {
    getAll: () => productos,
    add: (product) => {
      product.id = nextId++;
      productos.push(product);
    },
    remove: (id) => {
      productos = productos.filter(p => p.id !== id);
    }
  };