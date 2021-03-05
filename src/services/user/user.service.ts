import { Router } from 'express';
import ServiceCreate from '../../config/services.config';
import Service from '../../interface/app/service';

const User = (): Router => {
  const service = ServiceCreate({
    name: 'user',
    model: () => {
      console.log('aceitou cara');
    },
  });
  // put here the customs routes
  // service.get('/route-name', (req, res) => { })

  return service;
};

export default User();
