import { MongoHelper } from './mongo-helper';
import { CreateProfileRepository } from '../../../data/protocols/db';
import { ObjectId } from 'mongodb'; 
export class ProfileMongoRepository implements CreateProfileRepository {
  // change this any to a model
  async save(data: CreateProfileRepository.Params): Promise<any> {
    const userCollection = await MongoHelper.getCollection('users');
    // console.log(data);
    const query = {
      _id: new ObjectId(data.user_id),
    };

    const pushNewCompany = {
      $push: {
        companies: {
          _id: new ObjectId(),
          company: data.company_id,
          role: data.role,
        },
      },
    };

    const options = {
      projection: {
        _id: 1,
        name: 1,
        email: 1,
        active: 1,
        companies: 1,
      },
    };
  
    const profile = await userCollection.findOneAndUpdate(
      query,
      pushNewCompany,
      options
    ); 

    return profile.value;
  }
}
