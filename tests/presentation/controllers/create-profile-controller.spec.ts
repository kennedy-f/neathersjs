import { AddProfileController } from '@/presentation/controllers';
import { badRequest, ok, created, noContent } from '@/presentation/helpers';

import { AddProfileSpy } from '../mocks/add-profile-spy';

import faker from 'faker';
import { MockResult } from '../../domain/mocks';
import { Http2ServerRequest } from 'http2';

const mockRequest = (): AddProfileController.Request => ({
  company_id: faker.name.findName(),
  role: faker.name.firstName(),
  user_id: faker.name.firstName(),
});

type SutTypes = {
  sut: AddProfileController;
  addProfileSpy: AddProfileSpy;
};

const makeSut = (): SutTypes => {
  const addProfileSpy = new AddProfileSpy();

  const sut = new AddProfileController(addProfileSpy);
  const result = MockResult();
  return { sut, addProfileSpy };
};

describe('AddProfile Controller', () => {
  it('Should return 201 and a result of adding a profile', async () => {
    const { sut, addProfileSpy } = makeSut();
    const request = mockRequest();
    const httpResponse = await sut.handle(request);

    expect(httpResponse).toEqual({
      body: addProfileSpy.result,
      statusCode: 201,
    });
  });
});
