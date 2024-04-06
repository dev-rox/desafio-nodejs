import { Request, Response } from 'express';
import Agendamento from '../models/Agendamento';

class AgendamentoController {
  async get(req: Request, res: Response) {
    try {
      const agendamento = await Agendamento.findAll();
      return res.json(agendamento);
    } catch (error) {
      res.json(error);
    }
  }
  async store(req: Request, res: Response) {
    const { email, servico, reserva } = req.body;
    try {
      const agendamento = await Agendamento.create({ email, servico, reserva });
      return res.json(agendamento);
    } catch (error) {
      res.json(error);
    }
  }
  async delete(req: Request, res: Response) {
    const { id } = req.body;
    try {
      const agendamento = await Agendamento.destroy({ where: { id } });
      return res.json(agendamento);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new AgendamentoController();
