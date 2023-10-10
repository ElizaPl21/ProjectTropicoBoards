//Selector para escuchar el evento 
const form = document.querySelector(".form");

form.addEventListener('button', manejoSubmit);

//
function manejoSubmit (evento){
    evento.preventDefault()
}