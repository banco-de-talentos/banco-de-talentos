import * as express from 'express';
import { candidate } from './controllers/candidate';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.config();

    this.app.get('/', (_req, res) => res.json({ ok: true }));

    this.app.get('/404_not_found', (_req, res) => res.status(404).json({ message: 'Page not found' }));

    this.app.post('/finish', candidate.createCandidate);
    
    //Adicionar chave=valor na url(entra depois do ?) para buscar o que deseja
    this.app.get('/candidates/search?', candidate.findCandidates);

    //this.app.post('/candidates/search/:param', candidate.findCandidateByEmail);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();