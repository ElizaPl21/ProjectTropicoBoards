/*const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("patinetas"));
    if (memoria && memoria.length > 0) {
      const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
      cuentaCarritoElement.innerText = cuenta;
    } else {
      cuentaCarritoElement.innerText = 0;
    }
  }*/

  // navbar.js
document.addEventListener("DOMContentLoaded", function () {
    // Verificar si existe el contador de carrito en la barra de navegación
    const cuentaCarrito = document.getElementById("cuenta-carrito");

    if (cuentaCarrito) {
        // Obtener el carrito del almacenamiento local
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        
        // Calcular la cantidad total de productos en el carrito
        const carritoTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
        
        // Actualizar el contador
        cuentaCarrito.textContent = carritoTotal;
    }
});