import { AddProfile } from '../../../domain/useCases';
import { CreateProfileRepository } from '../db';

export class DbCreateProfile implements AddProfile {
  constructor(
    private readonly createProfileRepository: CreateProfileRepository,
  ) {}

  async checkByEmail(
    data: CreateProfileRepository.Params,
  ): Promise<AddProfile.Result> {
    return this.createProfileRepository.save(data);
  }
}
