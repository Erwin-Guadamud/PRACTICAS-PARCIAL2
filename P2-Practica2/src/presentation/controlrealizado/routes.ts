import { Router } from 'express';
import { ControlrealizadosController } from './controller';
import { ControlrealizadoDatasourceImpl } from '../../infrastructure/datasource/controlrealizado.datasource.impl';
import { ControlrealizadoRepositoryImpl } from '../../infrastructure/repositories/controlrealizado.repository.impl';

export class ControlrealizadoRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new ControlrealizadoDatasourceImpl();
    const controlrealizadoRepository = new ControlrealizadoRepositoryImpl(datasource);
    const controlrealizadoController = new ControlrealizadosController(controlrealizadoRepository);

    router.get('/', controlrealizadoController.getControlrealizados);
    router.get('/:id', controlrealizadoController.getControlrealizadoById);
    
    router.post('/', controlrealizadoController.createControlrealizado);
    router.put('/:id', controlrealizadoController.updateControlrealizado);
    router.delete('/:id', controlrealizadoController.deleteControlrealizado);

    return router;
  }

}
