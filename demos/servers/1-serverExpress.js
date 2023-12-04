import chalk from 'chalk';
import express from 'express';

const PORT = 3000;
const app = express();

const inventors = [
  {_id: 1,first: 'Albert', last: 'Einstein', year: 1876},
  {_id: 2,first: 'Issac', last: 'Newton', year: 1643},
  {_id: 3,first: 'Galileo', last: 'Galilei', year: 1564},
  {_id: 4,first: 'Marie', last: 'Curie', year: 1867},
  {_id: 5,first: 'Johannes', last: 'Kepler', year: 1571},
  {_id: 6,first: 'Nicolaus', last: 'Copernicus', year: 1473},
  {_id: 7,first: 'Max', last: 'Planck', year: 1858}, 
];

app.get('/', (req, res) =>{
  res.send('Hola mundo express');
});

// obtengo la lista de inventores ordenado
app.get('/api/inventors', (req, res) =>{
  const order = req.query.order;
  console.log(order);
  res.json(inventors);
});

// obtendo el inventor cuyo ID paso por parametro
app.get('/api/inventors/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  res.json(inventors.filter(inventor => inventor._id === id));
});

// middleware se usa para que el body se pueda utilizar
app.use(express.json());

// agrego el inventor cuyo json paso por body (usar la linea de arriba sino no funciona)
app.post('/api/inventors', (req, res) => {

  const inventorNuevo = req.body;
  inventorNuevo._id = 8;
  res.json(inventorNuevo)
});

// levanto el server y lo dejo escuchando en el PORT
app.listen(PORT,() =>{
  console.log(chalk.bgGreen(`Server express levantado en el puerto ${PORT}`));
});

