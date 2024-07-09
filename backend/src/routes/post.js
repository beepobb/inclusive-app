import { Router } from 'express';

import { getPosts, findPostsByText, insertPost } from '../models/post.js';


const postRouter = Router();

// GET post listing
postRouter.get('/', async function(req, res, next) {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// GET post search by text
postRouter.get('/search', async function(req, res, next) {
    try {
        const posts = await findPostsByText(req.query.text);
        res.json(posts);
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// POST post creation
postRouter.post('/', async function(req, res, next) {
    try {
        const newPost = await insertPost(req.body);
        res.json(newPost);
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

export default postRouter;
