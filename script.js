function renderizarTabla(alumno) {
    const bodyTabla = document.getElementById("body_alumnos");

    // limpio body de la tabla
    bodyTabla.innerHTML = "";

    for (const alumnos of alumno) {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = alumnos.nombre;

        const td2 = document.createElement("td");
        td2.innerText = alumnos.materia;

        tr.append(td1);
        tr.append(td2);

        // agregar tr al body
        bodyTabla.append(tr);
    }
};

const lista = document.querySelector('#lista')

fetch('https://swapi.dev/api/people')
    .then( (response) => response.json() )
    .then( (alumnosStarWars) => {
        const alumnoSW = alumnosStarWars.results;
        for (const persona of alumnoSW)
        alumnoSW.forEach(() => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${persona.name}</h4>
            `
            lista.append(li)
        })
    })

let alumnos = [];

// chequeo si tengo alumnos en el localStorage
const alumnosStorage = localStorage.getItem("alumnos");

if (alumnosStorage != null) {
    alumnos = JSON.parse(alumnosStorage);
};

const formularioAgregarAlumnos = document.getElementById("formulario_agregar_alumnos");

formularioAgregarAlumnos.addEventListener("submit", (event) => {
    event.preventDefault();

    // obtengo el nombre y la materia a rendir
    const inputNombreAlumno = document.getElementById("nombre_alumno");
    const inputMateriaARendir = document.getElementById("materia_a_rendir");

    const nombreAlumno = inputNombreAlumno.value;
    const materiaARendir = inputMateriaARendir.value;

    // agrego alumnos al array y luego al localStorage
    alumnos.push({
        nombre: nombreAlumno,
        materia: materiaARendir,
    });

    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    // renderizar tabla
    renderizarTabla(alumnos)
})

const botonLimpiar = document.getElementById("limpiarLocalStorage");

botonLimpiar.addEventListener("click", () => {
    location.reload();
    localStorage.clear();
})


