import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: true });

const build = () => {
  server.get('/ping', async (req, res) => {
    return 'pong\n';
  });

  return server;
};

export default build;
