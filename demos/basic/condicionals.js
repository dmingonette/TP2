// operadores de igualdad
// (==) (===)

// contempla el valor solamente
console.log(1 == '1');

// contempla el tipo y el valor
console.log(1 === '1');

console.log(null == undefined);
console.log(0 == false);

// valores falsos
// false, undefined, null, 0, '' (cadena vacia)

if (undefined) {
  console.log('Es verdadero!!');
} else{
  console.log('Es falso!!')
}

let d = 2;

d % 2 == 0 ? console.log('es par'): console.log('es impar');

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }