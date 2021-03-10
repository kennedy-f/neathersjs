import { AddProfile } from '../../domain/useCases';
import { noContent, ok, serverError } from '../helpers';
import { Controller, CustomHttpResponse, Validation } from '../protocols'; 

export class AddProfileController implements Controller {
  constructor(
    // private readonly validation: Validation,
    private readonly addProfile: AddProfile,
  ) {}

  async handle(
    request: AddProfileController.Request,
  ): Promise<CustomHttpResponse> {
    try {
      console.log('request maked ');
      const profile = await this.addProfile.add({
        ...request,
      });
      return ok(profile);
    } catch (err) {
      return serverError(err);
    }
  }
}

export namespace AddProfileController { 
  export type Request = {
    user_id: string;
    company_id: string;
    role: string;
  };
  
}