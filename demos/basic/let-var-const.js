// let vs var
// let es la forma moderna de declarar variables
// var es legaxy

// var permite redeclarar la misma variable, let no
// Usar siempre let

var x = 1;

if(x === 1){
  var x = 2;
  console.log(x);  
}

var x = 10;

console.log(x);

// Declaracion de constante
const nombre = 'Diego';

const person = {
  name: 'Diego',
  age: 25,
};

console.log(person);

person.name = 'Macri';

person.phone = '1234567890';

console.log(person);