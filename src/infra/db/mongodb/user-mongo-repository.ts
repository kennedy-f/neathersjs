import { MongoHelper } from './mongo-helper';
import { CheckUserByEmailRepository } from '../../../data/protocols/db/users';

export class UserMongoRepository implements CheckUserByEmailRepository {
  async checkByEmail(
    email: string,
  ): Promise<CheckUserByEmailRepository.Result> {
    const userCollection = await MongoHelper.getCollection('users');
    const user = await userCollection.findOne({ email });

    return user;
  }
}
