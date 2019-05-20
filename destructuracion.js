// Por medio de la destructuracion nos permite simplificar el codigo y organizar los objetos
// tambien crearemos el file system(require interno) Manejo de archivos 

//  creamos una constante 

const {estudiante, obtenerPromedio} = require ('./require');
//creamos el file system
const fs = require('fs');

// primera destructuracion

console.log('El nombre del estudiante es ' + estudiante.nombre);
console.log('El promedio del estudiante es ' + obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

// segunda destructuracion
// a la variable edad le colocamos un alias llamado anos

let {nombre, edad : anos, notas:{matematicas, ingles, programacion}} = estudiante;
console.log('El nombre del estudiante es ' + nombre);
console.log('El promedio del estudiante es ' + obtenerPromedio(matematicas, ingles, programacion));
console.log('La edad del estudiante es ' + anos);

//vamos a crear un archivo

let crearArchivo = (estudiante) =>{
	texto = 'El nombre del estudiante es ' + nombre + '\n' +
			', ha obtenido un promedio de ' + obtenerPromedio(matematicas, ingles, programacion);
			// creammos el archivo file system dentro de la funcion ( este trae 3 parametros 1. el arhivotxt creado, 2. el texto que creamos, 3. y nos arroja un error en caso de poseerlo)
			fs.writeFile('promedio.txt', texto, (err)=>{
				if(err) throw (err);
				console.log('Se ha creado el archivo')
			});	
}

crearArchivo(estudiante);
