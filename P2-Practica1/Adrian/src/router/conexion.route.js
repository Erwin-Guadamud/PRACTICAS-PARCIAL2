import express from 'express';
import cors from 'cors';
// Importa la función que deseas usar
//import { fetchDataWithAxios as axios, fetchDataWithAxios } from './conexiones.route.js';
// Si deseas cambiar a Ky, usa esta línea en su lugar:
import { fetchDataWithKy as ky, fetchDataWithKy } from './conexiones.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const data = await ky
    ('http://localhost:3000/paciente');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos: ' );
  }
});


export default app;