// describimos el codigo de manera normal como lo ealizamosen javascript

function promedio1 (nota1, nota2, nota3){
	let resultado = (nota1+nota2+nota3)/3;
	console.log('el promedio principal es ' + resultado);
}

//para la funcion flecha primero definimos la variable con los argumentos y luego escribimos lo que va dentro de la funcion 

let promedio2 =(nota1,nota2,nota3)=>{
	let resultado = (nota1+nota2+nota3)/3;
	console.log('el promedio 2 es ' + resultado);

}

let promedio3 = (nota1,nota2,nota3)=>console.log('el promedio 3 es ' + (nota1+nota2+nota3)/3);

promedio1(45,15,20);
promedio2(10,15,20);
promedio3(20,30,40);