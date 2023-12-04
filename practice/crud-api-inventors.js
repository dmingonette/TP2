// TODO: Tomando el archivo json inventors

// GET /api/inventors --> retorna todos los inventores
// GET /api/inventors/:is --> retorna un inventor determinado por ID
// POST /api/inventors/ --> da de alta un nuevo inventor
// PUT /api/inventors/:id --> actualiza las propiedades de un inventor segun ID
// DELETE /api/inventors/:id --> elimina un inventor por ID

import express from 'express';
import fs from 'fs/promises';

const PATH = './inventors.json';
const PORT = 3000;
const app = express();

// middleware se usa para que el body se pueda utilizar
app.use(express.json());

async function getInventors() {
  try {
    const data = await fs.readFile(PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

// GET /api/inventors --> retorna todos los inventores

// obtengo la lista de inventores ordenado
app.get('/api/inventors', async (req, res) =>{
  try {
    const inventors = await getInventors();
    res.json(inventors);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo inventores' });
  }
});

// GET /api/inventors/:is --> retorna un inventor determinado por ID

// obtendo el inventor cuyo ID paso por parametro
app.get('/api/inventors/:id', async (req, res) =>{
  try {
    const id = parseInt(req.params.id);
    const inventors = await getInventors();
    const inventor = inventors.find((inventor) => inventor._id === id);

    if (inventor) {
      res.json(inventors.filter(inventor => inventor._id === id));  
    } else {
      res.status(404).json({error: 'inventor no encontrado'})  
    }
    
  } catch (error) {
    console.error(`Error al obtener inventor: ${error}`)
    res.status(500).json({ error: 'Error obteniendo inventor'})
  }
});

// POST /api/inventors/ --> da de alta un nuevo inventor

async function saveInventors(inventors) {
  try {
    await fs.writeFile(PATH, JSON.stringify(inventors, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing file:', error);
    throw error;
  }
}

// agrego el inventor cuyo json paso por body (usar la linea de arriba sino no funciona)
app.post('/api/inventors', async (req, res) => {
  try {
    const inventorNuevo = req.body;

    // Obtener la lista actual de inventores
    const inventors = await getInventors();

    // Asignar un nuevo ID al inventor (puedes ajustar esto según tu lógica)
    inventorNuevo._id = inventors.length + 1;

    // Agregar el nuevo inventor a la lista
    inventors.push(inventorNuevo);

    // Guardar la lista actualizada en el archivo JSON
    await saveInventors(inventors);

    res.json(inventorNuevo);
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});
// PUT /api/inventors/:id --> actualiza las propiedades de un inventor segun ID

app.put('/api/inventors/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedInventor = req.body;

    // Obtener la lista actual de inventores
    const inventors = await getInventors();

    // Buscar el inventor por ID
    const index = inventors.findIndex((inventor) => inventor._id === id);

    // Si no se encuentra el inventor, devolver un error
    if (index === -1) {
      return res.status(404).json({ error: 'Inventor no encontrado' });
    }

    // Actualizar el inventor en la lista
    inventors[index] = { ...inventors[index], ...updatedInventor };

    // Guardar la lista actualizada en el archivo JSON
    await saveInventors(inventors);

    res.json(inventors[index]);
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});
// DELETE /api/inventors/:id --> elimina un inventor por ID

app.delete('/api/inventors/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    // Obtener la lista actual de inventores
    const inventors = await getInventors();
        
    // Encontrar el índice del inventor que se va a eliminar
    const index = inventors.findIndex((inventor) => inventor._id === id);
    
    // Si no se encuentra el inventor, devolver un error
    if (index === -1) {
      return res.status(404).json({ error: 'Inventor no encontrado' });
    }

    // Eliminar el inventor de la lista
    inventors.splice(index, 1);

    // Guardar la lista actualizada en el archivo JSON
    await saveInventors(inventors);

    res.json({ message: 'Inventor eliminado correctamente' });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

app.listen(PORT,() =>{
  console.log(`Server crud-api-inventors levantado en el puerto ${PORT}`);
});