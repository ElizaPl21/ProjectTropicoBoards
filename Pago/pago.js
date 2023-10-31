function validarFormulario() {
    var form = document.querySelector("form.needs-validation");
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
    return form.checkValidity();
  }