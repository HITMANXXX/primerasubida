const {obtenerPromedio, argv} = require('./index.js');

console.log(argv);
if (argv._[0]=='promedio') {
	console.log('el promedio de ' + argv.n + ' es ');
}
else{
	console.log (' promedio no calculado ');
}