
// 1- leer el archivo inventors.json
// 2- añadir nuevo inventor
// 3- escribir en el json incluyendo el nuevo inventor
// 4- leer el archivo con el nuevo inventor
// UTILIZANDO SOLO FUNCIONES ASINCRONAS DE LECTURA Y ESCRITURA

import fs from 'fs';
const PATH = './inventors.json';

const nuevoInventor = {
  "first": "James",
  "last": "Maxwell",
  "year": 1831
 }

// 1- Lectura
fs.readFile(PATH,'utf-8', (error,data) =>{
  if (!error) {
    const inventors = JSON.parse(data);
    // 2- Add
    inventors.push(nuevoInventor)
    // 3- Write
    fs.writeFile(PATH, JSON.stringify(inventors, null, '  '), error => {
      if(!error){
        // 4- Lectura con inventor agregado
        fs.readFile(PATH, 'utf-8', (error, data) => {
          if(!error){
            console.log(JSON.parse(data));
          }
        });
      }
    });
  }
});