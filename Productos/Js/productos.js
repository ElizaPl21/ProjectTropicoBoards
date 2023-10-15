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
  image.classList.add("card-img-top");
  image.alt = "...";
  image.src = producto.imagen;
 
//Obteniendo id
  const number = document.createElement("li");
  number.classList.add("list-group-item");
  number.textContent = `ID: ${producto.id}`;

//Obteniendo nombre
  const name = document.createElement("li");
  name.classList.add("list-group-item");
  name.textContent = `Nombre: ${producto.productName}`;

//Obteniendo precio
  const price = document.createElement("li");
  price.classList.add("list-group-item");
  price.textContent = `Precio: $${producto.productPrice}`;

//Obteniendo descripción
  const description = document.createElement("li");
  description.classList.add("list-group-item");
  description.textContent = `Descripción: ${producto.productDescription}`;

//Obteniendo stock
  const stock = document.createElement("li");
  stock.classList.add("list-group-item");
  stock.textContent = `En stock: ${producto.stockQuantity}`;
  

  card.appendChild(image);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(stock);

  division.appendChild(card);
}

// Cargar productos y mostrar los primeros 10
fetchProductos()
  .then((productos) => {
    for (let i = 0; i < 10 && i < productos.length; i++) {
      mostrarProducto(productos[i]);
    }
  });