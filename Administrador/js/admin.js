// admin.js

// Función para validar y agregar un nuevo producto
document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const productName = document.getElementById("productName").value;
    const productDescription = document.getElementById("productDescription").value;
    const productStock = document.getElementById("productStock").value;

    // Validar campos y mostrar errores utilizando las alertas de Bootstrap
    if (validarCampos(productName, productDescription, productStock)) {
        // Agregar el producto a la lista
        const product = {
            name: productName,
            description: productDescription,
            stock: productStock,
            // Agregar aquí la lógica para la imagen
        };
        addProductToPage(product);
    }
});

// Función para validar campos del formulario
function validarCampos(productName, productDescription, productStock) {
    // Implementa la validación de campos aquí
    // Debe mostrar alertas de Bootstrap en caso de errores
    return true; // Simulado para este ejemplo
}

// Función para agregar un producto a la lista
function addProductToPage(product) {
    // Implementa la lógica para agregar el producto a la página
    // Puedes crear una tarjeta de Bootstrap y agregarla a #productList
}

// Función para exportar los productos a formato JSON
document.getElementById("exportJson").addEventListener("click", function () {
    // Implementa la lógica para convertir los productos a JSON
    // Puedes mostrar el JSON en una alerta o hacer lo que desees con él
});