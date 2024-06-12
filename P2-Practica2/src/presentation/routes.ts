import { Router } from 'express';

import { PacienteRoutes } from './paciente/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/paciente', PacienteRoutes.routes );
    
    return router;
  }


}

