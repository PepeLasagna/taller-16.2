/* 
NINGÚN CAMPO VACÍO
El Email debe tener un formato valido
La contraseña debe tener al menos 6 caracteres
Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales

Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio" (en este caso dentro de un modal).
*/

// Obtén el elemento del checkbox por su id
const miCheckbox = document.getElementById("terminos");

// Agrega un evento "change" para detectar cuándo cambia el estado del checkbox
miCheckbox.addEventListener("change", function () {
  if (miCheckbox.checked) {
    // Si está marcado console.log("El checkbox está marcado.");
    // Puedes realizar otras acciones aquí
  } else {
    // Si no está marcado
    console.log("El checkbox no está marcado.");
    // Puedes realizar otras acciones aquí
  }
});
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  console.log("coso");

  let nomb = document.getElementById("nombre");
  let apell = document.getElementById("apellido");
  let email = document.getElementById("email");
  let pass1 = document.getElementById("password1");
  let pass2 = document.getElementById("password2");
  let checkbox = document.getElementById("checkbox");
  let terminos = document.getElementById("terminos");
  let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  console.log(checkbox.checked);

  //Validación del nombre
  if (!nomb.checkValidity()) {
    nomb.setAttribute("class", "form-control is-invalid");
    e.preventDefault();
  } else {
    nomb.setAttribute("class", "form-control is-valid");
  }
  //Validación del apellido
  if (!apell.checkValidity()) {
    apell.setAttribute("class", "form-control is-invalid");
    e.preventDefault();
  } else {
    apell.setAttribute("class", "form-control is-valid");
  }
  //Validación del email
  if (!regExp.test(email.value)) {
    email.setAttribute("class", "form-control is-invalid");
    e.preventDefault();
  } else {
    email.setAttribute("class", "form-control is-valid");
  }
  //Validación del password
  if (!pass1.checkValidity()) {
    pass1.setAttribute("class", "form-control is-invalid");
    e.preventDefault();
  } else {
    pass1.setAttribute("class", "form-control is-valid");
  }

  if (pass1.value == pass2.value && pass1.checkValidity()) {
    pass2.setAttribute("class", "form-control is-valid");
  } else {
    pass2.setAttribute("class", "form-control is-invalid");
    e.preventDefault()
  }
  //Validación de los terminos

  if (!checkbox.checked) {
    checkbox.setAttribute("class", "form-check-input is-invalid");
    terminos.setAttribute("class", "btn btn-link link-danger ps-0 is-invalid");
    e.preventDefault();
  } else {
    checkbox.setAttribute("class", "form-check-input is-valid");
    terminos.setAttribute("class", "btn btn-link ps-0");
  }
  
});