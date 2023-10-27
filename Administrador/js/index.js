$(document).ready(function () {
    // Función para validar el formulario
    function validarFormulario() {
        // Implementa tu lógica de validación aquí
        // Puedes usar las alertas de Bootstrap para mostrar errores
        // Ejemplo: if (campo_invalido) { $('#nombre').addClass('is-invalid'); }
    }

    // Función para crear una tarjeta de producto
    function crearTarjeta(nombre, descripcion, precio, stock, imagenUrl) {
        const card = `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="card">
                <img src="${imagenUrl}" class="card-img-top" alt="Imagen del producto">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <p class="card-text">$${precio}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary editar-producto">Editar</button>
                    <button class="btn btn-danger eliminar-producto">Eliminar</button>
                </div>
            </div>
        </div>
        `;
        return $(card);
    }

    // Función para limpiar el formulario después de crear un producto
    function limpiarFormulario() {
        $('#product-form')[0].reset();
        $('#preview').attr('src', '');
    }

    // Evento de clic en el botón "Crear Producto"
    $('#crear-producto').click(function () {
        validarFormulario();

        const nombre = $('#nombre').val();
        const descripcion = $('#descripcion').val();
        const precio = $('#precio').val();
        const stock = $('#stock').val();
        const imagen = $('#imagen')[0].files[0];
        const imagenUrl = imagen ? URL.createObjectURL(imagen) : '';

        const tarjeta = crearTarjeta(nombre, descripcion, precio, stock, imagenUrl);

        $('#productos').append(tarjeta);

        limpiarFormulario();

        // Manejadores de eventos para los botones "Editar" y "Eliminar"
        tarjeta.find('.editar-producto').click(function () {
            const card = $(this).closest('.card');
            const cardBody = card.find('.card-body');
            const cardTitle = cardBody.find('.card-title');
            const cardText = cardBody.find('.card-text').first();
            const cardPrice = cardBody.find('.card-text').last();

            // Permitir la edición de los campos
            cardTitle.attr('contenteditable', true);
            cardText.attr('contenteditable', true);
            cardPrice.attr('contenteditable', true);

            // Cambiar el texto del botón a "Guardar"
            $(this).text('Guardar');

            $(this).one('click', function () {
                // Guardar los cambios
                cardTitle.attr('contenteditable', false);
                cardText.attr('contenteditable', false);
                cardPrice.attr('contenteditable', false);

                // Restaurar el texto del botón a "Editar"
                $(this).text('Editar');
            });
        });

        tarjeta.find('.eliminar-producto').click(function () {
            // Eliminar la tarjeta del DOM
            tarjeta.remove();
        });
    });

    // Evento de cambio en el campo de imagen
    $('#imagen').change(function () {
        const imagen = this.files[0];
        if (imagen) {
            $('#preview').attr('src', URL.createObjectURL(imagen));
        }
    });

    // Evento de clic en el botón "Listo"
    $('#listo').click(function () {
        const productos = [];

        $('#productos .card').each(function () {
            const card = $(this);
            const cardTitle = card.find('.card-title');
            const cardText = card.find('.card-text').first();
            const cardPrice = card.find('.card-text').last();
            const imagenUrl = card.find('.card-img-top').attr('src');

            const nombre = cardTitle.text();
            const descripcion = cardText.text();
            const precio = parseFloat(cardPrice.text().replace('$', ''));

            productos.push({ nombre, descripcion, precio, imagenUrl });
        });

        const productosJSON = JSON.stringify(productos);

        console.log(productosJSON);
    });
});
