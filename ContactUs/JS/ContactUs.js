//Selector para escuchar el evento 
const form = document.querySelector(".form");

form.addEventListener('submit', manejoSubmit);

//
function manejoSubmit (evento){
    evento.preventDefault()
}