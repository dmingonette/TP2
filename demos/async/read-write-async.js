import fs from 'fs';

const PATH = './bigFile.txt';

fs.readFile(PATH, 'utf-8', (error, data) =>{
  if(!error){
  console.log("Termino de leer el archivo grande");
  console.log(data)
  } else{
    console.log("Error de lectura");
  }
});

console.log("Termino de leer el archivo???");