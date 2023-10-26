//SCRIP DE VALIDACIÓN DE REGISTRO

const registroForm = document.getElementById("registroForm");

registroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreUsuario = document.getElementById("nombreUsuario").value;
    const apellidoUsuario = document.getElementById("apellidoUsuario").value;
    const correoRegistro = document.getElementById("correoRegistro").value;
    const contrasenaRegistro = document.getElementById("contrasenaRegistro").value;
    const verificacionContrasena = document.getElementById("verificacionContrasena").value;

    const Users=JSON.parse(localStorage.getItem("users")) || [];
    const esUsuarioRegistrado = Users.find(user=> user.correoRegistro===correoRegistro);
   
    if(esUsuarioRegistrado){
       return alert ("El usuario ya esta registrado")
   }
   Users.push({nombreUsuario:nombreUsuario, apellidoUsuario:apellidoUsuario, correoRegistro:correoRegistro, contrasenaRegistro:contrasenaRegistro,verificacionContrasena:verificacionContrasena})
   localStorage.setItem("users",JSON.stringify(Users))
   alert ("Refistro exitoso")
   
   //Redirección a login
   window.location.href="./Login.html"


     if (nombreUsuario.trim() === "") {
         document.getElementById("nombreUsuarioError").textContent = "El nombre es obligatorio";
         return;
     }

     if (apellidoUsuario.trim() === "") {
         document.getElementById("apellidoUsuarioError").textContent = "El apellido es obligatorio";
         return;
     }

     if (!isValidEmail(correoRegistro)) {
         document.getElementById("correoRegistroError").textContent = "El correo no es válido";
         return;
     }

     if (contrasenaRegistro.length >=8) {
         document.getElementById("contrasenaRegistroError").textContent = "La contraseña debe tener al menos 8 caracteres";
         return;
     }

     if (contrasenaRegistro !== verificacionContrasena) {
         document.getElementById("verificacionContrasenaError").textContent = "Las contraseñas no coinciden";
         return;
     }

     registroForm.submit();
 });

//  function isValidEmail(email) {
//      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//      return emailRegex.test(email);
//  }