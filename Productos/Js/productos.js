
//con esta linea aseguramos que se ejecte el codigo carrito compras despues de ejcutar productos
document.addEventListener("DOMContentLoaded", function() {
//Constantes que dan información a los elementos de la DOM en HTML
const contenedorTarjetas = document.getElementById("productos-container");

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
  //card.style.setProperty("width", "18rem", "productos-container");
  card.classList.add("tarjeta-patineta");

 //Obteniendo imagen
  const image = document.createElement("img");
  image.classList.add("tarjeta-patineta", "img-item");
  image.alt = "...";
  image.src = producto.imagen;
 
//Obteniendo id
  

//Obteniendo nombre
  const name = document.createElement("li");
  name.classList.add("tarjeta-patineta", "titulo-item");
  name.textContent = `${producto.productName}`;


//Obteniendo precio
  const price = document.createElement("li");
  price.classList.add("tarjeta-patineta", "precio-item");
  price.textContent = `Precio: ${producto.productPrice}`;

//Obteniendo descripción
  // const description = document.createElement("li");
  // description.classList.add("productos-container");
  // description.textContent = `Descripción: ${producto.productDescription}`;

//Obteniendo stock
  // const stock = document.createElement("li");
  // stock.classList.add("productos-container","item");
  // stock.textContent = `En stock: ${producto.stockQuantity}`;

 //boton
const button = document.createElement("button");
button.classList.add("btn", "btn-primary","boton-item");
button.type = "button";
//button.classList.add("btn btn-primary")
button.innerText = "Agregar al carrito"; 

// Agregar una clase al botón


  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(price);
  //card.appendChild(description);
  //card.appendChild(stock);
  card.appendChild(button);

  contenedorTarjetas.appendChild(card);
}

// Cargar productos y mostrar los primeros 10
fetchProductos()
  .then((productos) => {
    for (let i = 0; i < 13 && i < productos.length; i++) {
      mostrarProducto(productos[i]);
    }

    //cargar el archivo "carrito_compras.js" después de que se haya cargado la DOM de "productos"
    const scriptCarrito = document.createElement('script');
    scriptCarrito.src = 'carrito_compras.js'; // Ruta al archivo "carrito_compras.js"
    document.body.appendChild(scriptCarrito);
  });
  });
  