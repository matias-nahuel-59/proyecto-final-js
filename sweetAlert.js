// Al apretar el boton aceptar sale el sweetAlert para infrmarle que sus datos han sido guardados

const aceptar = document.getElementById("formulario_agregar_alumnos");
aceptar.addEventListener("submit", (event) => {
    event.preventDefault();
    Swal.fire({
        title: 'Exelente!',
        text: 'Dentro de 48hs habiles recibiras un correo con los dias y horarios en los que puedes rendir tu materia'
    })
});