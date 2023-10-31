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
  console.log(productos);
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
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
        .addEventListener("click", (e) => {
          const cuentaElement = e.target.parentElement.getElementsByClassName("span")[0];
          cuentaElement.innerText = agregarAlCarrito(producto);
          crearTarjetasProductosCarrito();
          actualizarTotales();
        });

      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
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
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      unidades += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  
  unidadesElement.innerText = unidades;
  precioElement.innerText = precio;
}
revisarMensajeVacio();
}

function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("patinetas"));
  console.log(productos, productos == true);
  carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
  totalesContainer.classList.toggle("escondido", !(productos && productos.length > 0));
}

revisarMensajeVacio();

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);
function reiniciarCarrito() {
  localStorage.removeItem("patinetas");
  actualizarTotales();
  crearTarjetas();
}

/*
//Segunda manera conrefresh funciona con html en cantidad en vez de unidades
const contenedorTarjetas = document.getElementById('tarjeta-container');
const cantidadElement = document.getElementById('cantidad');
const precioElement = document.getElementById('precio');
const carritoVacio = document.getElementById("carrito-vacio");
const totales = document.getElementById("totales");

function crearTarjetas () {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("patinetas"));
    //console.log(productos);
    if(productos && productos.length > 0){
    productos.forEach((producto) => {
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
          .getElementsByTagName("button")[0]
          .addEventListener("click", (e) => {
            const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
            cantidadElement.innerText = restarAlCarrito(producto);
            crearTarjetasProductosCarrito();
            actualizarTotales();
          });
        nuevoProducto
          .getElementsByTagName("button")[1]
          .addEventListener("click", (e) => {
            const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
            cantidadElement.innerText = agregarAlCarrito(producto);
            actualizarTotales();
          });
      });
    }
revisarMensajeVacio();
actualizarTotales();
actualizarNumeroCarrito();
}

crearTarjetas();
//Actualizar el total de precio y unidades de la página del carrito

function actualizarTotales() {
 const productos = JSON.parse(localStorage.getItem("patinetas"));
 let cantidad = 0;
 let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
}
cantidadElement.innerText = cantidad;
precioElement.innerText = precio;
if(precio === 0) {
  reiniciarCarrito();
  revisarMensajeVacio();
}
}

document.getElementById("vacio").addEventListener("click", () => {
    contenedorTarjetas.innerHTML = "";
    reiniciarCarrito();
    revisarMensajeVacio();
  });

  function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("patinetas"));
    carritoVacio.classList.toggle("escondido", !productos);
    totales.classList.toggle("escondido", productos);
  }
 
*/
