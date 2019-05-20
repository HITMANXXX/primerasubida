//Parametro callback : permite retormar un procedimiento luego de ejecutar un evento y a su ves permite gestionar los errores 

let promedio =(nota1, nota2, nota3, callback)=>{
	//por medio de la funcion settimeout ddamos orden para que se ejecute a los 2 segundos 
	setTimeout(function(){
		let resultado =(nota1+nota2+nota3)/3;
		//este es el ultimo argumento de promedio nos permmite poder mostrarlo cuando este se encuentre ya listo para imprimir por uera de la funcion
		callback (resultado);
	}, 0);
}

promedio(20,13,50, function(resultado){
	console.log(resultado);
})