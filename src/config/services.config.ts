import { Router } from 'express';

const routes = Router(); 
const serviceCreate = (Service: any, Routes?:Router): Router => {
  routes.get(`/${Service.name}`, (req, res) => {
    console.log('Request in', Service.name);
    res.json('success');
  });
  
  if (Routes) {
    console.log(Routes)
    routes.use(Routes); 
  }
  
  return routes; 
};

export default serviceCreate;
