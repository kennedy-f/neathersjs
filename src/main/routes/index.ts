import { FastifyReply, FastifyRequest } from 'fastify';
import { routeCreate } from '../adapters';

const teste = (req: FastifyRequest, res: FastifyReply) => {
  res.send('connected');
};

const routes = [routeCreate('GET', '/teste55', teste)];

export default routes;
