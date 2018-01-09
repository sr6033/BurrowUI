import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as path from 'path';


// import routers
import { BurrowRouter } from './routes/Burrow';


// Server class
export class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    // config
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(compression());
  }

  public routes(): void {
    let router: express.Router;
    router = express.Router();

    this.app.use('/', router);
    this.app.use('/api', BurrowRouter);

    // Angular dist output folder.
    this.app.use(express.static(path.join(__dirname, '../dist')));
    // Send all other requests to the Angular app.
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
  }
}

export default new Server().app;
