import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClientCOntroller = new CreateClientController();

routes.post('/client/', createClientCOntroller.handle);

export { routes };
