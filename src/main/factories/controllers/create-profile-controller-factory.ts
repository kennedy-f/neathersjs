import { ProfileMongoRepository } from '../../../infra/db/mongodb';
import { DbCreateProfile } from '../../../data/protocols/useCases/db-create-profile';

export const makeCreateProfileController = () => {
  const profileMongoRepository = new ProfileMongoRepository();
  return new DbCreateProfile(profileMongoRepository);
};
