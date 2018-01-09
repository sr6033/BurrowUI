import { BurrowService } from 'burrow-backend';
import { Request, Response, Router } from 'express';

export class BurrowRouter {
  public router: Router;
  private url: string;

  constructor(url: string) {
    this.url = url;
    this.router = Router();
  }

  public getRouter(): Router {
    this.buildRoutes();
    return this.router;
  }

  public getClusters(req: Request, res: Response) {
      const burrow: BurrowService = new BurrowService(this.url);
      burrow.getClusters()
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            res.status(500).json({
              error: true,
              message: err.toString()
            });
          });
  }

  public getCluster(req: Request, res: Response) {
      const burrow: BurrowService = new BurrowService(this.url);
      burrow.getCluster(req.params.cluster)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          message: err.toString()
        });
      });
  }

  public getConsumers(req: Request, res: Response) {
      const burrow: BurrowService = new BurrowService(this.url);
      burrow.getConsumers(req.params.cluster)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          message: err.toString()
        });
      });
  }

  public getConsumer(req: Request, res: Response) {
      const burrow: BurrowService = new BurrowService(this.url);
      burrow.getConsumer(req.params.cluster, req.params.consumer)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          message: err.toString()
        });
      });
  }

  public getTopics(req: Request, res: Response) {
      const burrow: BurrowService = new BurrowService(this.url);
      burrow.getTopics(req.params.cluster)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          message: err.toString()
        });
      });
  }

  public getTopic(req: Request, res: Response) {
      const burrow: BurrowService = new BurrowService(this.url);
      burrow.getTopic(req.params.cluster, req.params.topic)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          message: err.toString()
        });
      });
  }

  public buildRoutes() {
    this.router.get('/', this.getClusters);
    this.router.get('/:cluster', this.getCluster);
    this.router.get('/:cluster/consumers', this.getConsumers);
    this.router.get('/:cluster/consumers/:consumer', this.getConsumer);
    this.router.get('/:cluster/topics', this.getTopics);
    this.router.get('/:cluster/topics/:topic', this.getTopic);
  }
}
