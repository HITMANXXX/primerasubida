//require interno

let estudiante = {
	nombre: 'Anderson',
	edad: 38,
	notas:{
		matematicas: 4,
		ingles: 4.5,
		programacion: 4.8,

	}
};

//funcion tipo flecha para obtener el promedio
let obtenerPromedio = (nota1, nota2, nota3) => (nota1+nota2+nota3)/3;
// si deseamos obtener el proedio del objeto que hemos creado (estudiante)
//console.log(obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

// vamos a ver una clase de nodejs que se llama MODULE (es una clase que permite exportar un array para enviar de un script a otro)
//vamos a exportar el objeto creado y el promedio de las notas 
module.exports = {
	estudiante,
	obtenerPromedio
};




