const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1876},
  {first: 'Issac', last: 'Newton', year: 1643},
  {first: 'Galileo', last: 'Galilei', year: 1564},
  {first: 'Marie', last: 'Curie', year: 1867},
  {first: 'Johannes', last: 'Kepler', year: 1571},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473},
  {first: 'Max', last: 'Planck', year: 1858}, 
];

// Imprime en formato tabular
function printInventors(inventors){
  console.log(`Nombre      Apellido     Año`)
  console.log(`----------------------------`)

  // inventors.forEach(
  //   function(inventor){
  //     console.log(`${inventor.first}      ${inventor.last}      ${inventor.year}`);
  // });

  inventors.forEach(
    inventor => console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`)
  );
}

printInventors(inventors)

// muestra por consola los inventores nacidos antes del 1800

function filterInventors(inventors){
  // utilizo el metodo filter para solo traer los que me piden
  printInventors(
    inventors.filter(inventor => inventor.year < 1800)
  );
};

filterInventors(inventors);

// mostrar por consola los inventores cuyo apellido empieza con C

function getInventorsBeginOf(inventors){
  printInventors(
    inventors.filter(inventor => inventor.last.startsWith('C'))
  );
}

getInventorsBeginOf(inventors);

// mostrar por consola los inventores convirtiendo el apellido en mayuscula

function mapInventors(inventors){
  printInventors(
    inventors.map(inventor => ({
      first: inventor.first,
      last: inventor.last.toUpperCase(),
      year: inventor.year
    }))
  );
}

mapInventors(inventors);

// mostrar usando los 2 anteriores

printInventors(
  inventors
  .filter(inventor => inventor.last.startsWith('C'))
  .map(inventor => ({
    first: inventor.first,
    last: inventor.last.toUpperCase(),
    year: inventor.year
  }))
)

// buscar el inventor Kepler y retornar el objeto
  console.log(
    inventors.find(inventor => inventor.last === 'Kepler')
  );

// algun inventor nacido en 1858

console.log(
  inventors.some(inventor => inventor.year === 1858)
);

// todos los inventores nacieron despues de 1500

console.log(
  inventors.every(inventor => inventor.year > 1500)
);

// Mostrar por consola los inventores ordenados ascendentemente por fecha de nacimiento

printInventors(
  // metodo sort utiliza funcion anonima para marcar el metodo de ordenamiento
  // inventors.sort((inventorA, inventorB) => inventorA.year > inventorB.year ? 1: -1)
  inventors.sort((inventorA, inventorB) => inventorA.year - inventorB.year)
);

// ordenar los inventores por apellido

printInventors(
  inventors.sort((inventorA, inventorB) => inventorA.last > inventorB.last ? 1:-1)
);

// convertir el array al formato:
/* 
    [{name:
      {
        first: 'first name',
        last: 'last name'
      }
    },
    year: year
    ]
 */

console.log(
  inventors.map(inventor => ({
    name: {
      first: inventor.first,
      last: inventor.last
    },
    year: inventor.year
  }))
);