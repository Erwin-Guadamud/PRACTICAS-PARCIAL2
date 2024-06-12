import { Router } from 'express';
import { PacientesController } from './controller';
import { PacienteDatasourceImpl } from '../../infrastructure/datasource/paciente.datasource.impl';
import { PacienteRepositoryImpl } from '../../infrastructure/repositories/paciente.repository.impl';

export class PacienteRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new PacienteDatasourceImpl();
    const pacienteRepository = new PacienteRepositoryImpl(datasource);
    const pacienteController = new PacientesController(pacienteRepository);

    router.get('/', pacienteController.getPacientes);
    router.get('/:id', pacienteController.getPacienteById);
    
    router.post('/', pacienteController.createPaciente);
    router.put('/:id', pacienteController.updatePaciente);
    router.delete('/:id', pacienteController.deletePaciente);

    return router;
  }

}
