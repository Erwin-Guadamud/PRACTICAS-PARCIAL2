import express from 'express';
import cors from 'cors';

import ExamenRoutes from "./router/Examen.route.js";
import PreguntaRoutes from "./router/Pregunta.route.js";
import InsumoEvaluacionRoutes from "./router/InsumoEvaluacion.route.js";
import ConexionRoutes from "./router/conexion.route.js";

const app = express();

// Habilita CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/examen', ExamenRoutes);
app.use('/pregunta', PreguntaRoutes);
app.use('/insumo', InsumoEvaluacionRoutes);
app.use('/conexion', ConexionRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
