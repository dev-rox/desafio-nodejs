import express from 'express';
import { routes } from './routes/routes';
import SwaggerUi from 'swagger-ui-express';
import SwaggerDocs from '../swagger/swagger.json';

const server = express();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

server.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
server.use(express.json());
server.use(routes);

export { server };
