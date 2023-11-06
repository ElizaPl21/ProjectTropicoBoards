//SCRIP DE VALIDACIÓN DE INICIO DE SESIÓN

const inicioSesionForm = document.getElementById("inicioSesionForm");

    inicioSesionForm.addEventListener("submit", function (event) {
        // Evitar el envío del formulario
        event.preventDefault();

        // Obtener los valores de los campos
        const correo= document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        // Realizar las validaciones, por ejemplo:
        if (!isValidEmail(correo)) {
            document.getElementById("correoError").textContent = "El correo no es válido";
            return; // No se envía el formulario
        }

        if (contrasena.length < 8) {
            document.getElementById("contrasenaError").textContent = "La contraseña es demasiado corta";
            return; // No se envía el formulario
        }
       
//Inicio de sesion en LocalStorage
const Users = JSON.parse(localStorage.getItem("users")) || [];
const validacionUsuario = Users.find(user => user.correo === correo && user.contrasena === contrasena);

const modalMessage = document.getElementById("modalMessage");

if (!validacionUsuario) {
  modalMessage.textContent = "Usuario y/o contraseña incorrectos";
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  loginModal.show();
} else {
  modalMessage.textContent = "¡Bienvenido! " + validacionUsuario.nombreUsuario;
  localStorage.setItem('login_success', JSON.stringify(validacionUsuario));
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  loginModal.show();
  window.location.href = '../Home/Home.html';
}
    });

// Función para validar un correo electrónico
function isValidEmail(correoInicio) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(correoInicio);
}

