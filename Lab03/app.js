
document.querySelector("#formUser").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    if (validarDatos()) {
        const confirmacion = confirm("¿Seguro que desea enviar el formulario?");

        if (confirmacion) {
            document.querySelector("#formUser").submit();
        }
    }
});

function validarDatos() {
    /* Obtener valores de inputs */
    const user = document.querySelector("#inputUser").value;
    const name = document.querySelector("#inputName").value;
    const password = document.querySelector("#passwordUser").value;
    const repitPass = document.querySelector("#repitPassword").value;

    if (user.length < 5 || user.length > 15) {
        alert("Por favor, escriba un Nombre de usuario aceptable.");
        return false;
    }

    if (name.length < 2 || name.length > 20) {
        alert("Por favor, escriba un solo nombre.");
        return false;
    }

    if (!validarContrasena(password)) {
        alert("La contraseña no cumple con los requisitos mínimos:\n\n" +
            "• Al menos una letra mayúscula\n" +
            "• Al menos una letra minúscula\n" +
            "• Al menos un dígito\n" +
            "• Al menos un carácter especial\n" +
            "• La contraseña debe contener solo letras (mayúsculas y minúsculas), dígitos y los siguientes caracteres especiales: $&+,:;=?@#|'<>.^*()%!-\n" +
            "• La longitud de la contraseña debe estar entre 8 y 20 caracteres.");
        return false;
    }

    const borderInputDivs = document.querySelectorAll(".border-input-error");
    borderInputDivs.forEach(div => {
        div.style.borderColor = ""; // Vaciar el color del borde
    });

    if (repitPass !== password) {
        alert("Ambas contraseñas deben ser iguales");
        borderInputDivs.forEach(div => {
            div.style.borderColor = "red";
        });
        return false;
    }

    return true;
}

function validarContrasena(contrasena) {
    // Establecer la expresión regular para la validación
    const regexContrasena = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()%!-]{8,20}$/;
    return regexContrasena.test(contrasena);
}

