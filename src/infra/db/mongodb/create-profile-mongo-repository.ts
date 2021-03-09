import { MongoHelper } from './mongo-helper';
import { CreateProfileRepository } from '../../../data/protocols/db';

export class ProfileMongoRepository implements CreateProfileRepository {
  // change this any to a model
  async save(data: CreateProfileRepository.Params): Promise<any> {
    const userCollection = await MongoHelper.getCollection('users');
    const profile = await userCollection.findOneAndUpdate(
      {
        _id: data.user_id,
      },
      {
        $push: {
          companies: {
            _id: data.company_id, // change this
            company: data.company_id,
            role: data.role,
          },
        },
      },
    );
    return profile;
  }
}
