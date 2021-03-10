import { AddProfile } from '@/domain/useCases/add-profile';
import { MockResult } from '@/tests/domain/mocks';  
export class AddProfileSpy implements AddProfile {
  params?: AddProfile.Params;
  result = MockResult();

  async add(params: AddProfile.Params): Promise<AddProfile.Result> {
    this.params = params;
    return this.result;
  }
}
