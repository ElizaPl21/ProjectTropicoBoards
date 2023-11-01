const contenedorTarjetas = document.getElementById('productos-container');

function crearTarjetasProductos (productos) {
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-patineta";
        nuevoProducto.innerHTML = `
            <img src = ${producto.imagen}>
            <h3 class="subtitulo contenido"> ${producto.productName}</h3> 
            <p class="precio contenido">${producto.productPrice}</p>
            <button class="boton-item btn btn-primary btn-block mb-4">Agregar al carrito</button>`
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto));
    });
}

crearTarjetasProductos(patinetas);
