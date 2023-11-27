
// 1- leer el archivo inventors.json
// 2- añadir nuevo inventor
// 3- escribir en el json incluyendo el nuevo inventor
// 4- leer el archivo con el nuevo inventor
// UTILIZANDO PROMESAS DE LECTURA Y ESCRITURA

import { write } from 'fs';
import fs from 'fs/promises';

const PATH = './inventors.json'
const nuevoInventor = {
  "first": "James",
  "last": "Maxwell",
  "year": 1831
}

function getInventors(){
  return fs.readFile(PATH,'utf-8');  
}

async function addInventor(inventor){
  const data = await getInventors();
  const inventors = JSON.parse(data);
  inventors.push(inventor);
  return inventors;
}

function writeInventors(inventors){
  fs.writeFile(PATH,JSON.stringify(inventors,null,' '));
}

// console.log(await getInventors());

//const inventors = await addInventor(nuevoInventor);

//writeInventors(inventors);

// 2-ADD
let inventors = await addInventor(nuevoInventor);
// 3-WRITE
await writeInventors(inventors);
inventors = await getInventors();
// 4-MOSTRAR
console.log(JSON.parse(inventors));