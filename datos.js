// aca van los datos que exportamos de la fila require
// creamos una constante del estudiante
//colocamos ./ para saber que es un archivo propio de nosotros

const estudiante1 = require ('./require');

// todo lo que esta en require se  va a guardar en una variable llamada estudiante1 y vamos a llamar al objeto(estudiante) o al procedimiento(promedio)

console.log(estudiante1.estudiante); 
console.log('El promedio del estudiante es ' + estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas, estudiante1.estudiante.notas.ingles, estudiante1.estudiante.notas.programacion));