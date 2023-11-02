const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function agregarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("patinetas")) || [];
  const indiceProducto = memoria.findIndex(patinetas => patinetas.id === producto.id);

  if (indiceProducto === -1) {
    memoria.push(getNuevoProductoParaMemoria(producto));
  } else {
    memoria[indiceProducto].cantidad++;
  }

  localStorage.setItem("patinetas", JSON.stringify(memoria));
  actualizarNumeroCarrito();
  return memoria[indiceProducto].cantidad;
}

function restarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("patinetas"));
  const indiceProducto = memoria.findIndex(patinetas => patinetas.id === producto.id);

  if (memoria[indiceProducto].cantidad === 1) {
    memoria.splice(indiceProducto, 1);
  } else {
    memoria[indiceProducto].cantidad--;
  }

  localStorage.setItem("patinetas", JSON.stringify(memoria));
  actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto) {
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}


function actualizarNumeroCarrito() {
  const memoria = JSON.parse(localStorage.getItem("patinetas"));
  if (memoria && memoria.length > 0) {
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
  } else {
    cuentaCarritoElement.innerText = 0;
  }
}

//Agregue esta linea de codigo para que se viera el contador del carrito en las demás paginas
document.addEventListener("DOMContentLoaded", function() {
  actualizarNumeroCarrito();
});