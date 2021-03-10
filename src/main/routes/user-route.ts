import { adaptRoute, routeCreate } from '../adapters';

import { makeCheckUser } from '../factories/controllers';
import { makeCreateProfile } from '../factories/controllers/create-profile-factory';

const routes = [
  routeCreate('GET', '/user', adaptRoute(makeCheckUser())),
  routeCreate('POST', '/user/profile', adaptRoute(makeCreateProfile())),
];

export default routes;
