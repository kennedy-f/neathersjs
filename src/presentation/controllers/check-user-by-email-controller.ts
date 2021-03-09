import { CheckUserByEmail } from '../../domain/useCases';
import { noContent, ok, serverError } from '../helpers';
import { Controller, CustomHttpResponse, Validation } from '../protocols';

export class CheckUserByEmailController implements Controller {
  constructor(
    // private readonly validation: Validation,
    private readonly checkUserByEmail: CheckUserByEmail,
  ) {}

  async handle(
    request: CheckUserByEmailController.Request,
  ): Promise<CustomHttpResponse> {
    try {
      const user = await this.checkUserByEmail.checkByEmail(request.email);
      return ok(user);
    } catch (err) {
      return serverError(err);
    }
  }
}

export namespace CheckUserByEmailController {
  export type Request = {
    email: string;
  };
}
