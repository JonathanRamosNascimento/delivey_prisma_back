import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClientCOntroller = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/client', createClientCOntroller.handle);

routes.post('/authenticate', authenticateClientController.handle);

export { routes };
