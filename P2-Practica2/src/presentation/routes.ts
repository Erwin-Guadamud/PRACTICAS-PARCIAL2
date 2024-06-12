import { Router } from "express";

import { PacienteRoutes } from "./paciente/routes";
import { SignovitalRoutes } from "./signovital/routes";
import { ControlrealizadoRoutes } from "./controlrealizado/routes";
import { GithubRoutes } from "./github/github.routes";

export class AppRoutes { 

    static get routes(): Router {
        const router = Router();

        router.use('/paciente', PacienteRoutes.routes);
        router.use('/signovital', SignovitalRoutes.routes);
        router.use('/controlrealizado', ControlrealizadoRoutes.routes);


        //github
        router.use('/github', GithubRoutes.routes );
        return router;
    }
}