import { Router } from 'express';

import { ping } from '../service/ping.js';


const pingRouter = Router();

// GET pong
pingRouter.get('/', function(req, res, next){
    const pong = ping()
    res.send(pong);
})

export default pingRouter;
