// dependencies
import express from 'express';

// files
import routes from './router';

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.router();
  }

  middleware() {
    this.server.use(express.json());
  }

  router() {
    this.server.use(routes);
  }
}

export default new App().server;
