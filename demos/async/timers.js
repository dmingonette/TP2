setTimeout(() => {
  console.log('Hola mundo despues de 4s');
}, 4000);

setTimeout(() => {
  console.log('Hola mundo despues de 2s');
}, 2000);

let contador = 0;
let id = setInterval(() => {
  contador++;
  console.log('Hola mundo cada de 5s');
  if (contador == 5) {
    clearInterval(id);
  }
}, 5000);

console.log('Esto se imprime despues de 6s?');