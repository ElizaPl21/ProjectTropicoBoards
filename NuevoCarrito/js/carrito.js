//No me funciona la accion de agregar al carrito, pero igual quita y suma funciona solamente con el refresh
const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("vacio");

function crearTarjetas() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("patinetas"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-patineta";
      nuevoProducto.innerHTML = `
      <img src="${producto.imagen}">
      <h3 class="subtitulo contenido">${producto.productName}</h3> 
      <p class="precio contenido">$${producto.productPrice}</p>
      <div>
          <button class="btn restar"> - </button>
          <span class="cantidad">${producto.cantidad}</span>
          <button class="btn sumar"> + </button>
      </div>
  `;
      contenedorTarjetas.appendChild(nuevoProducto);

      nuevoProducto
        .getElementsByClassName("sumar")[0]
        .addEventListener("click", () => {
          const cuentaElement = nuevoProducto.getElementsByClassName("cantidad")[0];
          cuentaElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });

      nuevoProducto
        .getElementsByClassName("restar")[0]
        .addEventListener("click", () => {
          restarAlCarrito(producto);
          crearTarjetas();
          actualizarTotales();
        });
    });
  }
}

function agregarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("patinetas")) || [];
  const indiceProducto = memoria.findIndex((patinetas) => patinetas.id === producto.id);

  if (indiceProducto === -1) {
    memoria.push(getNuevoProductoParaMemoria(producto));
  } else {
    memoria[indiceProducto].cantidad++;
  }

  localStorage.setItem("patinetas", JSON.stringify(memoria));
  return memoria[indiceProducto].cantidad;
}

function restarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("patinetas"));
  const indiceProducto = memoria.findIndex((patinetas) => patinetas.id === producto.id);

  if (memoria[indiceProducto].cantidad === 1) {
    memoria.splice(indiceProducto, 1);
  } else {
    memoria[indiceProducto].cantidad--;
  }

  localStorage.setItem("patinetas", JSON.stringify(memoria));
}

function getNuevoProductoParaMemoria(producto) {
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}

function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("patinetas"));
  let unidades = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      unidades += producto.cantidad;
      precio += producto.productPrice * producto.cantidad;


    });
  }
  
  unidadesElement.innerText = unidades;
  precioElement.innerText = precio;
  revisarMensajeVacio();
}

function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("patinetas"));
  carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
  totalesElement.classList.toggle("escondido", !(productos && productos.length > 0));
}

revisarMensajeVacio();

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);

function reiniciarCarrito() {
  localStorage.removeItem("patinetas");
  actualizarTotales();
  crearTarjetas();
}

crearTarjetas();
actualizarTotales();

document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
function pagarClicked(){
  alert("Gracias por la compra");
  window.location.href="../Pago/Pago.html";
}