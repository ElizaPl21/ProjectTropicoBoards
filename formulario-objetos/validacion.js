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

