import { FastifyReply, FastifyRequest } from 'fastify';
import RouteAdapter from '../adapters/fastify-route-adapter';

const teste = (req: FastifyRequest, res: FastifyReply) => {
  res.send('teste33');
};

const routes = [RouteAdapter('GET', '/teste55', teste)];

export default routes;
