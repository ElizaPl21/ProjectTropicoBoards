//Validación de formulario
document.getElementById("contacto").addEventListener("submit",function(validacion){
    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    
 if (nombre.trim()===""){ //trim elimina los espacios en blanco
    mostrarAlerta("Nombre es un campo obligatorio");
    validacion.preventDefault();
 }
 if (!validacionCorreo(correo)) {
    mostrarAlerta("Correo electrónico no válido");
    validacion.preventDefault();
 }
 if (!validacionAsunto(asunto)){
    mostrarAlerta("Asunto es un campo obligatorio");
    validacion.preventDefault();
 }
});
//Mostrar Alerta de Boostrap
function mostrarAlerta (mensaje){
    let alertaDiv =document.createElement('div');
    alertaDiv.className="alert alert-danger";
    alertaDiv.textContent=mensaje;
    document.getElementById("contacto").appendChild(alertaDiv);
    setTimeout(function () {
        alertaDiv.remove();
    }, 3000);
}
//Validar correo electrónico
function validacionCorreo(email){
    let res=/\S+@\S+\.\S+/;
    return res.test(email);

}

