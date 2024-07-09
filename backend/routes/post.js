const express = require('express');
const postModel = require('../models/post');
var router = express.Router;

// GET post listing
router.get('/all', async function(req, res, next){
    const posts = await postModel.all();
    res.send(`${JSON.stringify(posts)}`);
})

module.exports = router;