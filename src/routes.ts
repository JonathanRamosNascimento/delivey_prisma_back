import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';

const routes = Router();

const createClientCOntroller = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const deliveryController = new CreateDeliveryController();

routes.post('/client', createClientCOntroller.handle);

routes.post('/client/authenticate', authenticateClientController.handle);

routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
);

routes.post('/deliveryman', createDeliverymanController.handle);

routes.post('/delivery', ensureAuthenticateClient, deliveryController.handle);

export { routes };
