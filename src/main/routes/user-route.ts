import { adaptRoute, routeCreate } from '../adapters';


import { FastifyReply, FastifyRequest } from 'fastify';
const user = (req: FastifyRequest, res: FastifyReply) => {
  res.send('user 1 ');
};

import { makeCheckUser } from '../../main/factories/controllers';

const routes = [
  routeCreate('GET', '/user', user),
  routeCreate('GET', '/checkByemail', adaptRoute(makeCheckUser())),
];

export default routes;
