import Route from '../../domain/types/Route';

const newRoute = (
  method: string,
  url: string,
  handler: Function | Promise<void>,
  schema?: Function,
): Route => {
  const routeObject = {
    method,
    url,
    handler,
    schema,
  };
  return routeObject;
};
// !TO-DO
// future create here a function to say what server framework
// we are using express or fastify
// and make the adapter more flexible

export default newRoute;
