import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClientCOntroller = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/client', createClientCOntroller.handle);

routes.post('/client/authenticate', authenticateClientController.handle);

routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);

routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
