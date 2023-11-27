
// 1- leer el archivo inventors.json
// 2- añadir nuevo inventor
// 3- escribir en el json incluyendo el nuevo inventor
// 4- leer el archivo con el nuevo inventor
// UTILIZANDO PROMESAS DE LECTURA Y ESCRITURA


import fs from 'fs/promises';

const PATH = './inventors.json'
const nuevoInventor = {
  "first": "James",
  "last": "Maxwell",
  "year": 1831
 }

// 1- READ
fs.readFile(PATH,'utf-8')
  .then(data => {
    const inventors = JSON.parse(data);
    // 2- ADD
    inventors.push(nuevoInventor);
    // 3- WRITE
    return fs.writeFile(PATH, JSON.stringify(inventors, null, ' '));
  })
  .then(() => {
    return fs.readFile(PATH,'utf-8');
  })
  .then(data =>{
    console.log(JSON.parse(data));
  })
  .catch(error =>{
    console.log(error.message);
  })