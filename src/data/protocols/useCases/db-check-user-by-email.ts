import { CheckUserByEmail } from '../../../domain/useCases';
import { CheckUserByEmailRepository } from '../db/users';

export class DbCheckUserByEmail implements CheckUserByEmail {
  constructor(
    private readonly checkUserByEmailRepository: CheckUserByEmailRepository,
  ) {}

  async checkByEmail(email: string): Promise<CheckUserByEmail.Result> {
    return this.checkUserByEmailRepository.checkByEmail(email);
  }
}
