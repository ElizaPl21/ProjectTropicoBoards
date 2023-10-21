// Obtén el enlace "Regístrate" por su id
const mostrarRegistroEnlace = document.getElementById("mostrarRegistro");

// Obtén la sección "contenedorRegistro" por su id
const contenedorRegistro = document.getElementById("contenedorRegistro");

// Agrega un controlador de eventos al enlace
mostrarRegistroEnlace.addEventListener("click", function() {
  // Muestra la sección "contenedorRegistro" al hacer clic
  contenedorRegistro.style.display = "block";
});
