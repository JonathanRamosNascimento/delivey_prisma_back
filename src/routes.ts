import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClientCOntroller = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/client', createClientCOntroller.handle);

routes.post('/authenticate', authenticateClientController.handle);

routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
