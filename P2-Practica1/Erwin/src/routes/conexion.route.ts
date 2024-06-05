import express from 'express';
import cors from 'cors';
// Importa la función que deseas usar
//import { fetchDataWithAxios as axios, fetchDataWithAxios } from './librerias.roues';
// Si deseas cambiar a Ky, usa esta línea en su lugar:
import { fetchDataWithKy as ky, fetchDataWithKy } from './librerias.roues';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const data = await ky('http://localhost:4000/pregunta');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos: ' + (error as Error).message);
  }
});

export default app;