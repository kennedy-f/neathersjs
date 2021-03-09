import { UserMongoRepository } from '../../../infra/db/mongodb';
import { CheckUserByEmail } from '../../../domain/useCases';
import { DbCheckUserByEmail } from '../../../data/protocols/useCases';

export const makeCheckUserByEmailController = (): CheckUserByEmail => {
  const userMongoRepository = new UserMongoRepository();
  return new DbCheckUserByEmail(userMongoRepository);
};
