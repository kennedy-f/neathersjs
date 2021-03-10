import { AddProfileController } from './add-profile-controller';

import faker from 'faker';
import { AddProfileSpy } from '../mocks/add-profile-spy';
import { badRequest } from '../helpers';

const mockRequest = (): AddProfileController.Request => ({
  company: faker.name.findName(),
  level: faker.name.firstName(),
});

type SutTypes = {
  sut: AddProfileController;
  addProfileSpy: AddProfileSpy;
};

const makeSut = (): SutTypes => {
  const addProfileSpy = new AddProfileSpy();

  const sut = new AddProfileController(addProfileSpy);

  return { sut, addProfileSpy };
};

describe('AddProfile Controller', () => {
  it('Should add a profile controller', async () => {
    const { sut, addProfileSpy } = makeSut();

    const httpResponse = await sut.handle(mockRequest());

    expect(httpResponse).toEqual({ body: null, statusCode: 204 });
  });
});
