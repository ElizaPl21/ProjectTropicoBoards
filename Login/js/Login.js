//SCRIP PARA HACER QUE SE OCULTE Y SE MUESTRE SECCIÓN DE REGISTRO

// Obtén el enlace "Regístrate" por su id
const mostrarRegistroEnlace = document.getElementById("mostrarRegistro");

// Obtén la sección "contenedorRegistro" por su id
const contenedorRegistro = document.getElementById("contenedorRegistro");

// Agrega un controlador de eventos al enlace
mostrarRegistroEnlace.addEventListener("click", function() {
  // Muestra la sección "contenedorRegistro" al hacer clic
  contenedorRegistro.style.display = "block";
});

//SCRIP DE VALIDACIÓN DE INICIO DE SESIÓN

const inicioSesionForm = document.getElementById("inicioSesionForm");

    inicioSesionForm.addEventListener("submit", function (event) {
        // Evitar el envío del formulario
        event.preventDefault();

        // Obtener los valores de los campos
        const correoInicio = document.getElementById("correoInicio").value;
        const contrasenaInicio = document.getElementById("contrasenaInicio").value;

        // Realizar las validaciones, por ejemplo:
        if (!isValidEmail(correoInicio)) {
            document.getElementById("correoInicioError").textContent = "El correo no es válido";
            return; // No se envía el formulario
        }

        if (contrasenaInicio.length < 8) {
            document.getElementById("contrasenaInicioError").textContent = "La contraseña es demasiado corta";
            return; // No se envía el formulario
        }

        // Si las validaciones son exitosas, aquí puedes enviar el formulario
        inicioSesionForm.submit();
    });

    // Función para validar un correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

