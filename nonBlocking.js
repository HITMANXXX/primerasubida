//por medio de este codigo vamos a realizar el manejo de codigo por bloques (Esto se llama asincronimo)

function promedio1(nota1, nota2, nota3){
	let resultado=(nota1+nota2+nota3)/3;
	console.log('el primer promedio es ' + resultado);
}

//en este bloque de codigo va na uncion llamada setTimeout y con ella nos pppermite controlar el tiempo de ejeucion de las funciones en los bloques

let promedio2=(nota1,nota2,nota3)=>{
	setTimeout(function(){
	let resultado = (nota1+nota2+nota3)/3;
	console.log('El segundo promedio es ' + resultado);
}, 2000);	
}


let promedio3=(nota1,nota2,nota3)=>console.log('el tercer promedio es ' + (nota1+nota2+nota3)/3);


promedio1(20,45,70);
promedio2(10,20,30);
promedio3(15,20,25);