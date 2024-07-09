import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.use('/post', postRouter);

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));
