import express from 'express';
import cors from 'cors';
import services from './services';
import routes from './routes';
import ServiceCreate from './config/services.config';
import UserService from './services/user/user.service'; 

const app = express();

app.use(cors());

app.use(services); 

export default app;
