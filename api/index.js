// @flow
import { createServer } from 'http';
import express from 'express';
import middlewares from './middleware';

const debug = require('debug')('api:index');

debug('Server starting...');
debug('logging with debug enabled!');
const PORT = 3001;

const app = express();

app.use(middlewares);

const server = createServer(app);

// Start webserver
server.listen(PORT);
debug(`GraphQL server running at http://localhost:${PORT}/api`);

process.on('unhandledRejection', async (err) => {
  console.error('Unhandled rejection', err);
  try {
    await new Promise(resolve => Raven.captureException(err, resolve));
  } catch (err) {
    console.error('Raven error', err);
  } finally {
    process.exit(1);
  }
});

process.on('uncaughtException', async (err) => {
  console.error('Uncaught exception', err);
  try {
    await new Promise(resolve => Raven.captureException(err, resolve));
  } catch (err) {
    console.error('Raven error', err);
  } finally {
    process.exit(1);
  }
});
