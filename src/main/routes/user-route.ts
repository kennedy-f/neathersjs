import { adaptRoute, routeCreate } from '../adapters';

import { makeCheckUser } from '@/main/factories/controllers';

// import { FastifyReply, FastifyRequest } from 'fastify';
// const user = (req: FastifyRequest, res: FastifyReply) => {
//   res.send('user 1 ');
// };


const routes = [
  // routeCreate('GET', '/user', user),
  routeCreate('GET', '/user', adaptRoute(makeCheckUser())),
];

export default routes;
