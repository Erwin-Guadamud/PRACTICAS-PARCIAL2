import { Router } from 'express';
import { SignovitalsController } from './controller';
import { SignovitalDatasourceImpl } from '../../infrastructure/datasource/signovital.datasource.impl';
import { SignovitalRepositoryImpl } from '../../infrastructure/repositories/signovital.repository.impl';

export class SignovitalRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new SignovitalDatasourceImpl();
    const signovitalRepository = new SignovitalRepositoryImpl(datasource);
    const signovitalController = new SignovitalsController(signovitalRepository);

    router.get('/', signovitalController.getSignovitals);
    router.get('/:id', signovitalController.getSignovitalById);
    
    router.post('/', signovitalController.createSignovital);
    router.put('/:id', signovitalController.updateSignovital);
    router.delete('/:id', signovitalController.deleteSignovital);

    return router;
  }

}
