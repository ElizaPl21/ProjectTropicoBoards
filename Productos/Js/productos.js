<<<<<<< HEAD
=======

//con esta linea aseguramos que se ejecte el codigo carrito compras despues de ejcutar productos
document.addEventListener("DOMContentLoaded", function() {
>>>>>>> Ricardo-carrito
//Constantes que dan información a los elementos de la DOM en HTML
const division = document.querySelector(".list-group.list-group-flush");

// Función para cargar productos desde el archivo JSON
const fetchProductos= async() => {
  try{
    const productos = await fetch("productos.json"); 
  const parsedProductos= await productos.json(); 
    return parsedProductos;
} catch (err){
    console.log(err);
  }
}


// Función para mostrar un producto en la DOM-Creando tarjeta
function mostrarProducto(producto) {
  const card = document.createElement("div");
  card.style.setProperty("width", "18rem", "card-container");
  card.classList.add("card");

 //Obteniendo imagen
  const image = document.createElement("img");
<<<<<<< HEAD
  image.classList.add("card-img-top");
=======
  image.classList.add("card-img-top","imagencss");
>>>>>>> Ricardo-carrito
  image.alt = "...";
  image.src = producto.imagen;
 
//Obteniendo id
  const number = document.createElement("li");
  number.classList.add("list-group-item");
  number.textContent = `ID: ${producto.id}`;

//Obteniendo nombre
  const name = document.createElement("li");
  name.classList.add("list-group-item", "titulo-item");
  name.textContent = `${producto.productName}`;

//Obteniendo precio
  const price = document.createElement("li");
  price.classList.add("list-group-item", "precio-item");
  price.textContent = `Precio: ${producto.productPrice}`;

//Obteniendo descripción
  const description = document.createElement("li");
  description.classList.add("list-group-item");
  description.textContent = `Descripción: ${producto.productDescription}`;

//Obteniendo stock
  const stock = document.createElement("li");
  stock.classList.add("list-group-item");
  stock.textContent = `En stock: ${producto.stockQuantity}`;

 //boton
const button = document.createElement("button");
<<<<<<< HEAD
button.classList.add("btn", "btn-primary");
=======
button.classList.add("btn", "btn-primary","boton-item");
>>>>>>> Ricardo-carrito
button.type = "button";
//button.classList.add("btn btn-primary")
button.innerText = "Agregar al carrito"; 

// Agregar una clase al botón


  card.appendChild(image);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(stock);
  card.appendChild(button);

  division.appendChild(card);
}

// Cargar productos y mostrar los primeros 10
fetchProductos()
  .then((productos) => {
    for (let i = 0; i < 10 && i < productos.length; i++) {
      mostrarProducto(productos[i]);
    }
<<<<<<< HEAD
=======

    //cargar el archivo "carrito_compras.js" después de que se haya cargado la DOM de "productos"
    const scriptCarrito = document.createElement('script');
    scriptCarrito.src = 'carrito_compras.js'; // Ruta al archivo "carrito_compras.js"
    document.body.appendChild(scriptCarrito);
  });
>>>>>>> Ricardo-carrito
  });