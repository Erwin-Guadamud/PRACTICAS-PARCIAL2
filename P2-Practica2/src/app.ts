import server from 'express';
import cors from 'cors'; // Importa el paquete cors
import { Paciente, SignoVital, ControlRealizado, conexion } from './routes';

const app = server();

// Habilita CORS
app.use(cors());

app.use(server.json());

// Aquí puedes configurar tus rutas
app.use('/pacientes', Paciente);
app.use('/signovital', SignoVital);
app.use('/controlrealizado', ControlRealizado);
app.use('/conexion', conexion);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
