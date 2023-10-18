function validateForm() {
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productDescription = document.getElementById("productDescription").value;
    let stockQuantity = document.getElementById("stockQuantity").value;

    if (!productName || !productPrice || !productDescription || !stockQuantity) {
        // Muestra una alerta de Bootstrap en caso de errores
        let alertDiv = document.createElement("div");
        alertDiv.classList.add("alert", "alert-danger");
        alertDiv.innerHTML = "Por favor, complete todos los campos obligatorios.";
        document.getElementById("productForm").prepend(alertDiv);
    } else {
        // Crea un objeto JSON con la información del formulario
        let product = {
            productName: productName,
            productPrice: parseFloat(productPrice),
            productDescription: productDescription,
            stockQuantity: parseInt(stockQuantity)
        };

        // Mostrar el objeto JSON en la consola para verificar
        console.log(JSON.stringify(product, null, 2));
    }
}

let products = `{
    'products': [
        {
            "productName": "Coconut Skateboard",
            "productPrice": 2500,
            "productDescription": "Color rojo con diseño de cocos",
            "stockQuantity": 5
          }
          {
            "productName": "Turtle Skateboard",
            "productPrice": 2599,
            "productDescription": "Color azul con diseño de tortugas",
            "stockQuantity": 4
          }
          {
            "productName": "Dolphin Skateboard",
            "productPrice": 2700,
            "productDescription": "Color verde con diseño de delfines",
            "stockQuantity": 6
          }
          {
            "productName": "Flowers Skateboard",
            "productPrice": 2700,
            "productDescription": "Color naranja con diseño de flores",
            "stockQuantity": 5
          }
          {
            "productName": "Sea skateboard",
            "productPrice": 2000,
            "productDescription": "Color morado con diseño de mar",
            "stockQuantity": 7
          }
          {
            "productName": "Sunrise skateboard",
            "productPrice": 1800,
            "productDescription": "Color amarillo con diseño de amanecer",
            "stockQuantity": 5
          }
          {
            "productName": "Rainbow Skateboard",
            "productPrice": 1900,
            "productDescription": "Color rosa con diseño de arcoiris",
            "stockQuantity": 8
          }
          {
            "productName": "SeaStars Skateboard",
            "productPrice": 1900,
            "productDescription": "Color rojo con diseño de estrellas de mar",
            "stockQuantity": 8
          }
          {
            "productName": "Mandala Skateboard",
            "productPrice": 1900,
            "productDescription": "Color arcoiris con diseño de mandala",
            "stockQuantity": 6
          }
          {
            "productName": "Mandala Skateboard",
            "productPrice": 1900,
            "productDescription": "Color aquamarine con diseño de palmeras",
            "stockQuantity": 7
          }
    ]
}`

