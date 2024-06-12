import { Router } from 'express';
import { ControlrealizadoController } from './controller.ddd';
import { ControlrealizadoDatasourceImpl } from '../../infrastructure/datasource/controlrealizado.datasource.impl';
import { ControlrealizadoRepositoryImpl } from '../../infrastructure/repositories/controlrealizado.repository.impl';

export class ControlrealizadoRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new ControlrealizadoDatasourceImpl();
    const controlrealizadoRepository = new ControlrealizadoRepositoryImpl(datasource);
    const controlrealizadoController = new ControlrealizadoController(controlrealizadoRepository);

    router.get('/', controlrealizadoController.getControlrealizado);
    router.get('/:id', controlrealizadoController.getControlrealizadoById);
    
    router.post('/', controlrealizadoController.createControlrealizado);
    router.put('/:id', controlrealizadoController.updateControlrealizado);
    router.delete('/:id', controlrealizadoController.getControlrealizado);

    return router;
  }

}
