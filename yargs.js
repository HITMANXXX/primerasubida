//yargs: require para leer un texto desde teclado (ingresar grupos o comendos de texto desde teclado)

const opciones={
	matematicas:{
		default:0,
		alias:'m'
	},
	ingles:{
		default:0,
		alias:'i'
	},
	programacion:{
		demand:true,
		alias:'p'
	}

}

// creamos una constante que nos traera unos argumentos
const argv = require('yargs')
// en caso de no ingresar los datos de las variables que imprimiremmos en pantalla no aparecera un error,para eso los solucionamos por medio de comandos
.command('promedio','Calcular promedio',opciones)
.argv

//imprimimos los argumentos en pantalla que nos traera el argumento de matematicas 9para declarar la variable se utilizan los dos --)
console.log(argv.matematicas);
console.log(argv);
console.log('el promedio es ' +(argv.m+argv.i+argv.p)/3);