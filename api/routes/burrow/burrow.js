const express = require('express');
const router = express.Router();
const burrow_backend = require('burrow-backend');

const burrow_url = process.env.BURROW_URL || 'http://localhost:5600';

const BurrowService = new burrow_backend.BurrowService(burrow_url);

// Get all contacts
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Burrow API Home'
  });
});

router.get('/clusters', (req, res) => {
  BurrowService.getClusters()
    .then((clusters) => {
      res.status(200).json(clusters);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      });
    });
});

router.get('/clusters/:cluster', (req, res) => {
  BurrowService.getCluster(req.params.cluster)
    .then((cluster) => {
      res.status(200).json(cluster);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      });
    });
});

router.get('/clusters/:cluster/consumers', (req, res) => {
  BurrowService.getConsumers(req.params.cluster)
    .then((consumers) => {
      res.status(200).json(consumers);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      });
    });
});

router.get('/clusters/:cluster/consumers/:consumer', (req, res) => {
  BurrowService.getConsumer(req.params.cluster, req.params.consumer)
    .then((consumer) => {
      res.status(200).json(consumer);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      });
    });
});

router.get('/clusters/:cluster/consumers/:consumer/status', (req, res) => {
  BurrowService.getConsumerStatus(req.params.cluster, req.params.consumer)
    .then((consumer_status) => {
      res.status(200).json(consumer_status);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      });
    });
});

router.get('/clusters/:cluster/topics', (req, res) => {
  BurrowService.getTopics(req.params.cluster)
    .then((topics) => {
      res.status(200).json(topics);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      });
    });
});

router.get('/clusters/:cluster/topics/:topic', (req, res) => {
  BurrowService.getTopic(req.params.cluster, req.params.topic)
    .then((topic) => {
      res.status(200).json(topic);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Internal Server Error',
        error: err
      });
    });
});

module.exports = router;
