import { AddProfile } from '../../domain/useCases';
import { noContent, serverError } from '../helpers';
import { Controller, CustomHttpResponse, Validation } from '../protocols'; 

export class AddProfileController implements Controller { 
  constructor(
    private readonly validation: Validation
    private readonly addProfile: AddProfile
  ) { }; 

  async handle(request: AddProfileController.Request): Promise<CustomHttpResponse> { 
    try { 
      await this.addProfile.add({
        ...request,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      return noContent(); 
    } catch (err) { 
      return serverError(err); 
    }
  }
}

export namespace AddProfileController { 
  export type Request = {
    company: string,
    level: string
  }
  
}