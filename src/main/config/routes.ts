import { readdirSync } from 'fs';

const routes = (app: any): void => {
  readdirSync(`${__dirname}/../routes`).forEach(async file => {
    (await import(`../routes/${file}`)).default.forEach((routers: any) =>
      app.route(routers),
    );
  });
  return app;
};

export default routes;
