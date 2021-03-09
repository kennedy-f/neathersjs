import { Controller, CustomHttpResponse } from '../../presentation/protocols';
import { LogErrorRepository } from '../../data/protocols/db';

export class LogControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository,
  ) {}

  async handle(request: any): Promise<CustomHttpResponse> {
    const httpResponse = await this.controller.handle(request);
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.body.stack);
    }
    return httpResponse;
  }
}
