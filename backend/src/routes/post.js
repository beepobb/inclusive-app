import { Router } from 'express';
import { all } from '../models/post.js';
var router = Router();

// GET post listing
router.get('/all', async function(req, res, next){
    const posts = await all();
    res.send(`${JSON.stringify(posts)}`);
})

export default router;