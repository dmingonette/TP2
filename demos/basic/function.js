// Tipos de declaracion de funciones hay en JS

function add(a,b){
  return a + b;
}

add(4,5);

// asignando una variable
const square = function(x){
  return x*x;
}

console.log(square(5));

// Arrow Function

const getSum = (a,b) =>{
  return a + b;
}

const getSquare = x => x*x;
console.log(getSquare(4));

let numero = 4;
console.log((x => x*x)(numero));