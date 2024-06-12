import { Router } from 'express';
import { SignovitalController } from './controller.ddd';
import { SignovitalDatasourceImpl } from '../../infrastructure/datasource/signovital.datasource.impl';
import { SignovitalRepositoryImpl } from '../../infrastructure/repositories/signovital.repository.impl';

export class SignovitalRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new SignovitalDatasourceImpl();
    const signovitalRepository = new SignovitalRepositoryImpl(datasource);
    const signovitalController = new SignovitalController(signovitalRepository);

    router.get('/', signovitalController.getSignovital);
    router.get('/:id', signovitalController.getSignovitalById);
    
    router.post('/', signovitalController.createSignovital);
    router.put('/:id', signovitalController.updateSignovital);
    router.delete('/:id', signovitalController.getSignovital);

    return router;
  }

}
