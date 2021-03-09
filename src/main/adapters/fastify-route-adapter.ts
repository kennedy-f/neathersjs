import { Controller } from '../../presentation/protocols';

import { FastifyRequest, FastifyReply } from 'fastify';

export const adaptRoute = (controller: Controller) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const request = {
      ...(((req.body as Object)) || {}),
      ...(((req.params as Object)) || {}),
      ...(((req.query as Object)) || {})
    };
    const httpResponse = await controller.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.code(httpResponse.statusCode).send(httpResponse.body);
    } else {
      res.code(httpResponse.statusCode).send({
        error: httpResponse.body.message,
      });
    }
  };
};
