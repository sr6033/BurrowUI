// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.BURROWUI_PORT || '3000';
app.set('port', port);

// const host = process.env.BURROWUI_HOST || '0.0.0.0';
const host = '127.0.0.1';
app.set('host', host);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port and provided host.
 */
server.listen(port, host, () => console.log(`API running on ${host}:${port}`)
);
