const express = require('express');
const cors = require('cors');
var process = require('process');
var db = require('./models/db.js');

process.on('SIGINT', db.cleanup);
process.on('SIGTERM', db.cleanup);
var postRouter = require('./routes/post.js');
var app = express();

app.use(cors());

app.use('/post', postRouter);

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));
