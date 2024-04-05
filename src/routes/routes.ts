import { Request, Response } from 'express'; // Importando tipos do express para nodejs
import { Router } from 'express'; // Importando o router do Express

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('Olá');
});

router.post('/teste', (req: Request, res: Response) => {
  console.log(req.body);
  return res.send(req.body);
});

export { router };
