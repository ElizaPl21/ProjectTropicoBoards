// estas constantes son los contenedores donde se dibuja todos los elementos de la DOM
const pokemonContainer = document.querySelector(".pokemon-container");
const division = document.querySelector(".list-group.list-group-flush");

// Función para cargar productos desde el archivo JSON
function fetchProductos() {
  return fetch("productos.json")
    .then((response) => response.json());
}

// Función para mostrar un producto
function mostrarProducto(producto) {
  const card = document.createElement("div");
  card.style.setProperty("width", "18rem", "card-container");
  card.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("card-img-top", "imagencss", "imagen-item");
  image.alt = "...";
  image.src = producto.imagen;
   image.style.width = "246px";
   image.style.height = "150px";

  const number = document.createElement("li");
  number.classList.add("list-group-item");
  number.textContent = `ID: ${producto.id}`;

  const name = document.createElement("li");
  name.classList.add("list-group-item", "titulo-item");
  name.textContent = `Nombre: ${producto.productName}`;

  const price = document.createElement("li");
  price.classList.add("list-group-item", "precio-item");
  price.textContent = `Precio: $${producto.productPrice}`;

  const description = document.createElement("li");
  description.classList.add("list-group-item");
  description.textContent = `Descripción: ${producto.productDescription}`;

  const stock = document.createElement("li");
  stock.classList.add("list-group-item");
  stock.textContent = `En stock: ${producto.stockQuantity}`;

  const button = document.createElement("button");
  button.classList.add("list-group-item","boton-item");
  button.textContent = "Comprar";
  

  

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
  });

// function createCard (pikachu){
//     document.getElementById('name').textContent= "nombre: " + pikachu.name;
//      document.getElementById('id').textContent= "numero de pokemon: " + pikachu.id;
//      document.getElementById('weigh').textContent= "peso: " + pikachu.weight;
//      document.getElementById('img').src= pikachu.sprites.front_shiny_female;
//  } 