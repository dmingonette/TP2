const fs = require('fs');
const PATH = './inventors.json'

// JSON es un objeto que maneja los json, parse convierte en objeto lo que lee
const inventors = JSON.parse(fs.readFileSync(PATH, 'utf-8'))

// TODO1: Del archivo inventors.json mostrar por consola los nacidos despues del 1800

console.log(inventors.filter(inventor => inventor.year > 1800));

// TODO2: Insertar y persistir un nuevo inventor {first: 'Steve', last: 'Jobs', year: 1955}

inventors.push({first: 'Steve', last: 'Jobs', year: 1955});
console.log(inventors);

// stringify trasforma en string los objetos, agrega espacios de indentacion en el 3 parametro
fs.writeFileSync(PATH, JSON.stringify(inventors, null,'  '));
