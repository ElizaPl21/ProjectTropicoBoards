//SCRIP DE VALIDACIÓN DE REGISTRO

const registroForm = document.getElementById("registroForm");

registroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreUsuario = document.getElementById("nombreUsuario").value;
    const apellidoUsuario = document.getElementById("apellidoUsuario").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const verificacionContrasena = document.getElementById("verificacionContrasena").value;

    if (nombreUsuario.trim() === "") {
        document.getElementById("nombreUsuarioError").textContent = "El nombre es obligatorio";
        return;
    }

    if (apellidoUsuario.trim() === "") {
        document.getElementById("apellidoUsuarioError").textContent = "El apellido es obligatorio";
        return;
    }

    if (!isValidEmail(correo)) {
        document.getElementById("correoError").textContent = "El correo no es válido";
        return;
    }

    if (contrasena.length < 8) {
        document.getElementById("contrasenaError").textContent = "La contraseña debe tener al menos 8 caracteres";
        return;
    }

    if (contrasena !== verificacionContrasena) {
        document.getElementById("verificacionContrasenaError").textContent = "Las contraseñas no coinciden";
        return;
    }

    registroForm.submit();

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const esUsuarioRegistrado = Users.find(user => user.correo === correo);
    const modalMessage = document.getElementById("modalMessage");

    if (esUsuarioRegistrado) {
        //return alert ("El usuario ya esta registrado")
        modalMessage.textContent = "El usuario ya esta registrado";
        const registroModal = new bootstrap.Modal(document.getElementById('registroModal'));
        registroModal.show();
    } else
        Users.push({ nombreUsuario: nombreUsuario, apellidoUsuario: apellidoUsuario, correo: correo, contrasena: contrasena, verificacionContrasena: verificacionContrasena })
    localStorage.setItem("users", JSON.stringify(Users))
    modalMessage.textContent = "Registro exitoso";
    const registroModal = new bootstrap.Modal(document.getElementById('registroModal'));
    registroModal.show();



    //Redirección a login
    window.location.href = "./Login.html"

});


function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

