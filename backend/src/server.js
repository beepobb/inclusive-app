import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import configuration from './config/config.js';
import postRouter from './routes/post.js';
import staffRouter from './routes/staff.js';
import pingRouter from './routes/ping.js';


const app = express();
const port = configuration.app.port;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/ping', pingRouter);
app.use('/api/post', postRouter);
app.use('/api/staff', staffRouter);

app.get('/', function(req, res, next){
    res.redirect('/ping');
})

app.listen(port, () => 
    console.log(`Service is running on http://localhost:${port}`)
);
