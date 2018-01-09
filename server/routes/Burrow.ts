import { Router, Request, Response } from 'express';
import { BurrowService } from 'burrow-backend';

export class BurrowRouter {
  public router: Router;
  private burrow: BurrowService;

  constructor() {
    this.burrow = new BurrowService('http://localhost:8000')
    this.router = Router();
    this.routes();
  }

  getRouter(): Router {
    return this.router;
  }

  getClusters(req: Request, res: Response) {
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

  getCluster(req: Request, res: Response) {
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

  getConsumers(req: Request, res: Response) {
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

  getConsumer(req: Request, res: Response) {
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

  getTopics(req: Request, res: Response) {
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

  getTopic(req: Request, res: Response) {
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

  public routes() {
    this.router.get('/', this.getClusters);
    this.router.get('/:cluster', this.getCluster);
    this.router.get('/:cluster/consumers', this.getConsumers);
    this.router.get('/:cluster/consumers/:consumer', this.getConsumer);
    this.router.get('/:cluster/topics', this.getTopics);
    this.router.get('/:cluster/topics/:topic', this.getTopic);
  }
}

// export
const burrow = new BurrowRouter();
burrow.routes();

export default burrow.getRouter();
