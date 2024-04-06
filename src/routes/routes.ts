import { Router } from 'express';
import AgendamentoController from '../controllers/AgendamentoController';

export const routes = Router();

routes.get('/agendamentos', (req, res) => {
  AgendamentoController.get(req, res);
});

routes.post('/agendamentos', (req, res) => {
  AgendamentoController.store(req, res);
});

routes.delete('/agendamentos', (req, res) => {
  AgendamentoController.delete(req, res);
});
