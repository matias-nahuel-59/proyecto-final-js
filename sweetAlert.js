

const aceptar = document.getElementById("formulario_agregar_alumnos");
aceptar.addEventListener("submit", (event) => {
    event.preventDefault();
    Swal.fire({
        title:'Exelente!',
        icon: 'success',
        text: 'Dentro de 48hs habiles recibiras un correo con los dias y horarios en los que puedes rendir tu materia'
    })
});