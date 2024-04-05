import express from 'express'; // Importando todo o pacote do express
import { router } from './routes/routes'; // Importando router de routes.ts

const server = express();

server.use(express.json()); // Para informar que estamos trabalhando com json
server.use(router);

export { server };
