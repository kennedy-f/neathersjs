import { AddProfile } from '../useCases';

import faker from 'faker';

const MockAddProfile = (): AddProfile.Params => ({
  company_id: faker.name.findName(),
  role: faker.name.findName(),
  user_id: faker.name.findName(),
});
