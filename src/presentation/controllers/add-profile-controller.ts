import { AddProfile } from '../../domain/useCases';
import { created, serverError, badRequest } from '../helpers';
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
      // const error = this.validation.validate(request);
      // if (error) return badRequest(error);

      const profile = await this.addProfile.add({
        ...request,
      });
      return created(profile);
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