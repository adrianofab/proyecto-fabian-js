// Lista de alumnos // 
const alumnos = [
    { nombre: "Alicia", apellido: "Jofre" , genero: "femenino", curso: "2do" },
    { nombre: "Bruno", apellido: "Martin", genero: "masculino", curso: "1ro" },
    { nombre: "Jimena", apellido: "Perez", genero: "femenino", curso: "5to" },
    { nombre: "Dante", apellido: "Alonso", genero: "masculino", curso: "5to" },
  ];
  
  // Function para ordenar alumnos alfabeticamente //
  function ordenarAlumnosAlf(listaAlumnos) {
    return listaAlumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
  
  // Funcion para agregar alumnos a la lista //
function agregarAlumno(nombre, apellido, genero, curso) {

const nuevoAlumno = {nombre: nombre, apellido: apellido, genero:genero, curso: curso};alumnos.

push(nuevoAlumno);
}

agregarAlumno("Javier", "Palermini", "masculino", "5to");
agregarAlumno("Alvaro", "Michel", "masculino", "1ro");
agregarAlumno("Justina", "Villafañe", "femenino", "5to");

// Llamado de función para ordenar alumnos alfabeticamente//
const ordenarAlumnos = ordenarAlumnosAlf(alumnos);

// Mostrar en consola orden//
console.log(ordenarAlumnos);





// Promedio alumno //
function PromedioAlumn(){
let notas = [];
let x;

for (x = 0; x < 10; x++) {
    notas.push(Number(prompt("Hola Alumno, por favor ingrese sus notas:" + (x + 1), "1-10")));
}

let suma = notas.reduce(function(total, cantidad) {
    return total + cantidad
});


let promedio = (suma / (notas.length)).toFixed(1);


let estado;
if (promedio >= 5.6) {
    estado = ("Aprobado");
} else {
    estado = ("Reprobado");
}

console.log("Tus notas son: " + notas  + "\nTu Promedio es: " + promedio + "\nEstado: " + estado);
}

PromedioAlumn();




// Condicion para ser abanderado //
let condicion = prompt('¿Cuál es su condicion?');
switch (condicion) {
    case 'aprobado': {
        console.log('Cuenta con una condicion para ser abanderado')
        break;
    }
    case 'desaprobado': {
        console.log('No cuenta con una condicion para ser abanderado')
        break;
    }
    default:
        console.log('Ingrese un dato valido')
        break;
}





