import { adaptRoute, routeCreate } from '../adapters';

import { makeCheckUser } from '../factories/controllers';
import { makeCreateProfile } from '../factories/controllers/create-profile-factory';

// import { FastifyReply, FastifyRequest } from 'fastify';
// const user = (req: FastifyRequest, res: FastifyReply) => {
//   res.send('user 1 ');
// };


const routes = [
  // routeCreate('GET', '/user', user),
  routeCreate('GET', '/user', adaptRoute(makeCheckUser())),
  routeCreate('POST', '/user/profile', adaptRoute(makeCreateProfile())),
];

export default routes;
