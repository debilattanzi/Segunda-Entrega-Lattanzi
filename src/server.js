const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


io.on('connection', socket => {
  console.log('Cliente conectado');
  socket.emit('productos', products.getAll());

  socket.on('nuevoProducto', (product) => {
    products.add(product);
    io.emit('productos', products.getAll());
  });

  socket.on('eliminarProducto', (id) => {
    products.remove(id);
    io.emit('productos', products.getAll());
  });
});

server.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});