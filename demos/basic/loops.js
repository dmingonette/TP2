const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1876},
  {first: 'Issac', last: 'Newton', year: 1643},
  {first: 'Galileo', last: 'Galilei', year: 1564},
];

// for clasico con indice
for (let index = 0; index < inventors.length; index++) {
  const element = inventors[index];
  console.log(element);  
}

// for-of se usa para iterar los objetos dentro de una coleccion (como en JAVA, etc)
for (const inventor of inventors) {
  if (inventor.year < 1870) {
    console.log(inventor);
  }
}

// for-in se usa para iterar las propiedades de un objeto
for (const key in inventors) {
  console.log(key);
}

// forEach es una funcion del objeto array
inventors.forEach(inventor => {
  console.log(inventor);
});

// while (condition) {
  
// }

// do {
  
// } while (condition);