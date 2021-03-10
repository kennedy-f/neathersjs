import { AddProfile } from '../../domain/useCases/add-profile';

import faker from 'faker';

export class AddProfileSpy implements AddProfile {
  params?: AddProfile.Params;
  result = true;

  async add(params: AddProfile.Params): Promise<AddProfile.Result> {
    this.params = params;
    return this.result;
  }
}
