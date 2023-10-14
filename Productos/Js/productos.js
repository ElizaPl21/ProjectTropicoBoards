//Constantes que dan información a los elementos de la DOM en HTML
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
  image.classList.add("card-img-top", "imagencss");
  image.alt = "...";
  image.src = producto.imagen;
  //image.style.width = "240px";
  //image.style.height = "150px";

  const number = document.createElement("li");
  number.classList.add("list-group-item");
  number.textContent = `ID: ${producto.id}`;

  const name = document.createElement("li");
  name.classList.add("list-group-item");
  name.textContent = `Nombre: ${producto.productName}`;

  const price = document.createElement("li");
  price.classList.add("list-group-item");
  price.textContent = `Precio: $${producto.productPrice}`;

  const description = document.createElement("li");
  description.classList.add("list-group-item");
  description.textContent = `Descripción: ${producto.productDescription}`;

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
