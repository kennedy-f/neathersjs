import { Router } from 'express';

const routes = Router();

routes.get('/home', (req, res) => {
  console.log('teste funcionou');
  res.json('success');
});

export default routes;
