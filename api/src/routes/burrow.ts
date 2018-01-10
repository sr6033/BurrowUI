import { BurrowService } from 'burrow-backend';
import { Request, Response, Router } from 'express';

export class BurrowRouter {
  public router: Router;
  private burrow: BurrowService;

  constructor(url: string) {
      this.burrow = new BurrowService(url);
      this.router = Router();
  }

  public getRouter(): Router {
    this.buildRoutes();
    return this.router;
  }

  public getClusters(req: Request, res: Response) {
      this.burrow.getClusters()
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
      this.burrow.getCluster(req.params.cluster)
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
      this.burrow.getConsumers(req.params.cluster)
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
      this.burrow.getConsumer(req.params.cluster, req.params.consumer)
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
      this.burrow.getTopics(req.params.cluster)
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
      this.burrow.getTopic(req.params.cluster, req.params.topic)
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
    this.router.get('/',  (req, res) => this.getClusters(req, res));
    this.router.get('/:cluster', (req, res) => this.getCluster(req, res));
    this.router.get('/:cluster/consumers', (req, res) => this.getConsumers(req, res));
    this.router.get('/:cluster/consumers/:consumer', (req, res) => this.getConsumer(req, res));
    this.router.get('/:cluster/topics', (req, res) => this.getTopics(req, res));
    this.router.get('/:cluster/topics/:topic', (req, res) => this.getTopic(req, res));
  }
}
