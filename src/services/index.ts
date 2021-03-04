import app from '../app';
import ServiceCreate from '../config/services.config';

import User from './user/user.service';
/**
 * Just returns the services
 */
const services = [
  ServiceCreate(User),
  ServiceCreate({name : "filipe", model : () => console.log('gente boa')})

  
];

export default services;
