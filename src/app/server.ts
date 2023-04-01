import express, { Express } from 'express';
import { errorHandler } from './infrastructure/middleware/errorHandler';
import { authenticate } from './infrastructure/middleware/authenticate';

const app: Express = express();
const port = 3000;

// Set up the error handling middleware
app.use(errorHandler);

// Set up the authentication middleware
app.use(authenticate);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
