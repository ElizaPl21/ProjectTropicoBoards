// login.js

// Manejo del envío del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar usuario y contraseña (puedes hacerlo en el backend)
    if (validarCredenciales(username, password)) {
        // Redirigir al administrador a la página principal
        window.location.href = "admin.html";
    } else {
        // Mostrar un mensaje de error en caso de credenciales incorrectas
        mostrarError("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    }
});

// Función para validar credenciales (simulada)
function validarCredenciales(username, password) {
    // Implementa la validación de credenciales aquí
    // Debe comparar con credenciales válidas en el backend
    return true; // Simulado para este ejemplo
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    // Muestra una alerta o mensaje de error
    alert(mensaje);
}