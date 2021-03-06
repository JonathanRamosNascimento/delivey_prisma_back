import { prisma } from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAutheticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAutheticateClient) {
    // Receber username, password

    // Verificar se username cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('Username or password invalid!');
    }

    // Verificar se senha corresponde a username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    // Gerar o token
    const token = sign({ username }, 'ba6780da6cb17076e12396af9534d590', {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}
