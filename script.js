fetch(`https://dragon-ball-api.herokuapp.com/api/`);

function renderizarTabla(alumnos) {
    const bodyTabla = document.getElementById("body_alumnos");

    // limpio body de la tabla
    bodyTabla.innerHTML = "";

    for (const alumno of alumnos) {
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

let alumnos = [];

// chequeo si tengo alumnos en el localStorage
const alumnosStorage = localStorage.getItem("alumnos");

if (alumnosStorage != null) {
    alumnos = JSON.parse(alumnosStorage);
};

const formularioAgregarAlumnos = document.getElementById("formulario_agregar_alumnos");

formularioAgregarAlumnos.addEventListener("submit", (e) => {
    e.preventDeFault();

    // obtengo el nombre y la materia a rendir
    const inputNombreAlumno = document.getElementById("nombre_alumno");
    const inputMateriaARendir = getElementById("materia_a_rendir");

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
