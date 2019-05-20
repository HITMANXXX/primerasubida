const opciones = {

	nombre:{
		alias:'n',
		demand:true
	},

	matematicas:{
		demand:true,
		alias:'m'
	},
	ingles:{
		demand:true,
		alias:'i'
	},
	programacion:{
		demand:true,
		alias:'p'
	}
}

//obtenemos el promedio

let obtenerPromedio = (nota1,nota2,nota3)=>(nota1+nota2+nota3)/3;

const argv = require('yargs')
			.command('promedio','Calcular el promedio',opciones)	
			.argv

module.exports ={
	obtenerPromedio,
	argv
};			
