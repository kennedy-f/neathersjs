import { AddProfile } from '../useCases';

import faker from 'faker';

const MockAddProfile = (): AddProfile.Params => ({
  company: faker.name.findName(),
  level: faker.name.findName(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
});
