import { AddProfile } from '@/domain/useCases';
import faker from 'faker';

export const MockCompany = (): AddProfile.Params => ({
  company_id: faker.name.findName(),
  role: faker.name.findName(),
  user_id: faker.name.findName(),
});

export const MockResult = (): AddProfile.Result => ({
  _id: faker.name.findName(),
  name: faker.name.findName(),
  active: faker.random.boolean(),
  email: faker.name.jobArea(),
  companies: [
    {
      _id: faker.name.findName(),
      role: faker.name.jobArea(),
      company: faker.name.jobDescriptor(),
    },
    {
      _id: faker.name.findName(),
      role: faker.name.jobArea(),
      company: faker.name.jobDescriptor(),
    },
  ],
});
