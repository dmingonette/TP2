const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1876},
  {first: 'Issac', last: 'Newton', year: 1643},
  {first: 'Galileo', last: 'Galilei', year: 1564},
];

// Agrega un elemento al final del array
inventors.push({first: 'Diego', last: 'Mingonette', year: 1990});

// remueve el ultimo elemento del array
const ultimoInventor = inventors.pop();

// remueve el primer elemento del array
const primerInventor = inventors.shift();

inventors.splice(3,2);

// slice()