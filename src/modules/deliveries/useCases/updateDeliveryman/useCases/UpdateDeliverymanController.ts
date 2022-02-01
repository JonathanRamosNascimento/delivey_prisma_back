import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase';
import { Request, Response } from 'express';

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDaliverymanUpdateUseCase = new UpdateDeliverymanUseCase();
    const delivey = await updateDaliverymanUpdateUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivey);
  }
}
