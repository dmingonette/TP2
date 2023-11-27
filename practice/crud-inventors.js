// PERSISTIDO EN EL JSON inventors.json

const fs = require('fs');
const PATH = './inventors.json'

// TODO: getInventors()

function getInventors(){
  return JSON.parse(fs.readFileSync(PATH, 'utf-8'));
}

console.log(getInventors());

// TODO: getInventor(id)

function getInventor(id){
  return getInventors().find(inventor => inventor._id === id);
}

console.log(getInventor(3));

// TODO: insertInventor(inventor)

function insertInventor(inventor){

  fs.writeFileSync(PATH, JSON.stringify(inventors, null,'  '));
}
// TODO: updateInventor(inventor)

function updateInventor(inventor){
  const inventors = getInventors();
  //console.table(inventors);

  let inventorUpdate = inventors.find(inventor => inventor._id === inventor._id);
  
  inventorUpdate.first = inventor.first;
  inventorUpdate.last = inventor.last;
  inventorUpdate.year = inventor.year;

  //console.table(inventors);
  writeInventors(inventors)
}

function writeInventors(inventors){
  fs.writeFileSync(PATH, JSON.stringify(inventors, null, ' '))
}

updateInventor({
  "_id": 4,
  "first": "Marie",
  "last": "Curie",
  "year": 2020
 })

// TODO: deleteInventor(id)