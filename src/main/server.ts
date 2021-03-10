import 'module-alias/register';
import App from './config/app';
import env from './config/env';
import { MongoHelper } from '../infra/db/mongodb';


const app = App;

const server = async () => {
  try {
    await app.listen(env.port, '0.0.0.0');
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

MongoHelper.connect(env.mongoUrl)
  .then(() => server())
  .catch(console.error);

// server();
