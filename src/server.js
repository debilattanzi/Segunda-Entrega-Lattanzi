
const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');
const products = require('./products.js');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    
    socket.emit('productos', products.getAll()); //enviar los productos al cliente

    socket.on('nuevoProducto', (product) => {  //creo un evento que se emite cuando un nuevo producto es recibido
        console.log('Nuevo producto recibido');
        products.add(product);
        socket.emit('productos', products.getAll());
    });

    socket.on('eliminarProducto', (id) => {  //creo un evento que se emite cuando un producto es eliminado
        console.log('Producto eliminado');
        products.remove(id);
        socket.emit('productos', products.getAll());
    });
});

app.set('io', io);


app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto ${3000}`);     
})
