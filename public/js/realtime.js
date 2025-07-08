const socket = io();
const listaProductos = document.getElementById('listaProductos');
const formAgregar = document.getElementById('formAgregar');
const formEliminar = document.getElementById('formEliminar');


socket.on('productos', (productos) => {
    listaProductos.innerHTML = '';
    productos.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `ID: ${product.id} | ${product.title} - $${product.price}`;
        listaProductos.appendChild(li);
    });
});

formAgregar.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formAgregar);
    const nuevoProducto = {
        title: formData.get('title'),
        price: parseFloat(formData.get('price'))
    };
    socket.emit('nuevoProducto', nuevoProducto);
    formAgregar.reset();
});

formEliminar.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formEliminar);
    const id = parseInt(formData.get('id'));
    socket.emit('eliminarProducto', id);
    formEliminar.reset();
});
   