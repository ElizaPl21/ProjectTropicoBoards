const contenedorTarjetas = document.getElementById('productos-container');
const unidadesElement = document.getElementById('unidades');
const precioElement = document.getElementById('precio');

function crearTarjetas () {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("patinetas"));
    console.log(productos);
    if(productos && productos.length > 0){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-patineta";
        nuevoProducto.innerHTML = `
            <img src = ${producto.imagen}>
            <h3 class="subtitulo contenido"> ${producto.productName}</h3> 
            <p class="precio contenido">${producto.productPrice}</p>
            <div>
                <button> - </button>
                <span class="cantidad">${producto.cantidad}</span>
                <button> + </button>
            </div>
        `;
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto
        .getElementsByTagName("button")[1]
        .addEventListener("click",(e) => {
            agregarAlCarrito(producto);
            const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0]
            cuentaElement.innerText = agregarAlCarrito(producto);
            actualizarTotales();
        });
        nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click",() => {
            restarAlCarrito(producto);
            crearTarjetas();
            actualizarTotales();            
    });
    });
}
}

crearTarjetas();
actualizarTotales();

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("patinetas"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0) {
    productos.forEach(producto => {
        unidades += producto.cantidad;
        precio += producto.precio * producto.cantidad;
    })
    unidadesElement.innerText = unidades;
    precioElement.innerText = precio;
}
}