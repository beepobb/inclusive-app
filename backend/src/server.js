import express from 'express';
import cors from 'cors';

import configuration from './config/config.js';

const app = express();
const port = configuration.app.port;

app.use(cors());

app.use('/test', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.listen(port, () => 
  console.log(`API is running on http://localhost:${port}/test`)
);
