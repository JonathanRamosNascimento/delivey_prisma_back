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
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}
