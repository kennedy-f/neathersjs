import RouteAdapter from '../adapters/fastify-route-adapter';
import { FastifyReply, FastifyRequest } from 'fastify';
const user = (req: FastifyRequest, res: FastifyReply) => {
  res.send('user 1 ');
};

const routes = [RouteAdapter('GET', '/user', user)];

export default routes;
