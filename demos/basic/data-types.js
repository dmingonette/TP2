// Tipos de datos de javascript ES6+
// Number, String, Boolean, Symbol, Null, Undefined, Object

// NUMBER
let var1 = 1;
let var2 = 0;
let var3 = -0;

// aca se concatenan los strings
console.log("Sumar: " + var1 + var2);

// Aca se suman los valores correctamente
console.log("Sumar: " + (var1 + var2));

// Infinito es un valor de tipo number posible probablemente no logico
console.log(var1/var2);

// 
console.log("Raiz cuadrada (-1):" + Math.sqrt(-1));

// String

let saludo = "Hola mundo";
let pizza = '🍕'

// backtick
let saludo2 = `Hola quiero una ${pizza}`

console.log(typeof saludo);

console.log(saludo2);

// undefined: representa la ausencia de inicializacion o asignacion
let nodefinido;
console.log(nodefinido);

// null
let nulo = 45;
nulo = null;
console.log(nulo);

/// muchas de estas "desventajas de javascript se mitigan con Typescript"

// Ejercicio 1
// que pasa si a un numero le añado un numero en formato de cadena
// 2 + "2"
// a un booleano le añado un string
// 2 + true

console.log(2 + "2");
console.log(2 + true);

let actor = {
  name: 'Julia Roberts',
  age: 46
};

console.log(`La propiedad age: ${actor.age}`);

console.log(`La propiedad age: ${actor["age"]}`);