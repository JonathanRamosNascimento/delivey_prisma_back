import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    // Duas maneiras de buscar os pedidos do cliente

    // const deliveries = await prisma.deliveries.findMany({
    //   where: {
    //     id_client,
    //   },
    // });

    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      include: {
        deliveries: true,
      }
    });

    return deliveries;
  }
}
