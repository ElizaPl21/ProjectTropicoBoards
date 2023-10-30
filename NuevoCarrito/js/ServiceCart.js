const cuentaCarritoElement = document.getElementById('cuenta-carrito');

function agregarAlCarrito(producto) {
    const memoria =JSON.parse(localStorage.getItem("patinetas"));
    console.log(memoria);
    let cuenta = 0;
    if(!memoria){
        const nuevoProducto = getNuevoProductoMemoria(producto);
        localStorage.setItem("patinetas", JSON.stringify([nuevoProducto]));
        cuenta =1;
    } else {
        const indiceProducto = memoria.findIndex(patineta => patineta.id === producto.id)
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoMemoria(producto))
            cuenta = 1;
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("patinetas", JSON.stringify(nuevaMemoria));
        return cuenta;
    }
    actualizarNumeroCarrito();
    
}

function restarAlCarrito(producto) {
    const memoria =JSON.parse(localStorage.getItem("patinetas"));
    const indiceProducto = memoria.findIndex(patineta => patineta.id === producto.id)
    if(memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto, 1);
    } else {
        memoria[indiceProducto].cantidad --;
    }
    localStorage.setItem("patinetas", JSON.stringify(memoria));

}

/*Toma un producto, le agrega cantidad 1 y lo deuelve*/
function getNuevoProductoMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


function actualizarNumeroCarrito(){
    
    const memoria =JSON.parse(localStorage.getItem("patinetas"));
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarritoElement.innerText= cuenta;
}

actualizarNumeroCarrito();
