import { Router } from 'express';


const serviceCreate = (Service: any): any => {
  const routes = Router(); 

  routes.get(`/${Service.name}`, (req, res) => {
    console.log('Request in', Service.name);
    res.json('success');
  });
  return routes; 
};

export default serviceCreate;
