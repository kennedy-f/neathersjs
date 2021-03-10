import { AddProfile } from '../../../domain/useCases';
import { CreateProfileRepository } from '../db';

export class DbCreateProfile implements AddProfile {
  constructor(
    private readonly createProfileRepository: CreateProfileRepository,
  ) {}
    
  async add(data: AddProfile.Params): Promise<any> {
    return this.createProfileRepository.save(data);
  }
}
