import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing',
    });
  }

  // Bearer udsfgiausdh4654fiusahdf
  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, 'ba6780da6cb17076e12396af9534d590') as IPayload;

    request.id_client = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid token!',
    });
  }
}
