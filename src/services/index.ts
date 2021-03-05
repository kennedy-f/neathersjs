import app from '../app';
import ServiceCreate from '../config/services.config';

import Server from './server/server.service'; 
import User from './user/user.service';
/**
 * Just returns the services
 */
const services = [
  User,
  Server, 
];

export default services;
