import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt';

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    // Validar se o client existe
    const clientExistes = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (clientExistes) {
      throw new Error('Client already exists');
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar o client
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
